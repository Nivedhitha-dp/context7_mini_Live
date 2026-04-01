/**
 * context7-mini-live
 *
 * An MCP server that makes accessibility the default for any web UI task.
 * Fetches live documentation from official W3C / MDN / MDN sources on demand.
 *
 * Workflow (how Claude should use this server):
 *   1. resolve_components(description)  — maps what user is building → component IDs
 *   2. get_component_docs(id)           — fetches live spec/constraint docs
 *   3. get_component_examples(id)       — fetches live code examples
 *
 * Tools:
 *   resolve_components     — plain-English task → relevant component IDs + rationale
 *   list_components        — list all available component IDs
 *   get_component_docs     — fetch live docs for a component
 *   get_component_examples — fetch live examples for a component
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { parse } from "node-html-parser";
import { SOURCES } from "./sources.js";

// ---------------------------------------------------------------------------
// In-memory session cache  (URL → extracted text)
// Avoids re-fetching the same page twice in one session.
// ---------------------------------------------------------------------------
const SESSION_CACHE = new Map();

// ---------------------------------------------------------------------------
// resolve_components — map a plain-English UI task to component IDs
//
// Uses plain UI vocabulary (button, color, icon, image…) — not accessibility
// jargon. Contrast is always included for any visual element because color
// is a default accessibility concern for all UI.
// ---------------------------------------------------------------------------

const COMPONENT_RULES = [
  {
    id: "buttons",
    reason:
      "Any clickable element needs an accessible name, keyboard operability " +
      "(Enter + Space), visible focus indicator, and correct ARIA role.",
    triggers: /\b(button|btn|submit|click|cta|call.to.action|toggle|press|trigger|action|link)\b/i,
  },
  {
    id: "images",
    reason:
      "Images, icons, SVGs, logos, and decorative graphics all require alt " +
      "text decisions (meaningful vs empty) to be accessible to screen readers.",
    triggers: /\b(image|img|icon|svg|photo|figure|picture|logo|graphic|illustration|chart|graph|thumbnail|avatar|banner)\b/i,
  },
  {
    id: "contrast",
    reason:
      "All visible text and UI components must meet WCAG contrast ratios " +
      "(4.5:1 for text, 3:1 for UI components and focus rings).",
    // Contrast applies to ANY visual UI — it is the default fallback
    triggers: /\b(color|colour|background|style|css|theme|dark|light|text|visual|ui|component|element|design|palette|brand|gradient)\b/i,
  },
];

// Contrast is always included when ANY visual component is involved.
const CONTRAST_ALWAYS_WITH = new Set(["buttons", "images"]);

function resolveComponents(description) {
  const matched = [];
  const matchedIds = new Set();

  for (const rule of COMPONENT_RULES) {
    if (rule.triggers.test(description)) {
      matched.push({ id: rule.id, reason: rule.reason });
      matchedIds.add(rule.id);
    }
  }

  // Accessibility by default: if any visual component matched, always add contrast
  const needsContrast =
    !matchedIds.has("contrast") &&
    [...matchedIds].some((id) => CONTRAST_ALWAYS_WITH.has(id));

  if (needsContrast) {
    const contrastRule = COMPONENT_RULES.find((r) => r.id === "contrast");
    matched.push({ id: "contrast", reason: contrastRule.reason });
    matchedIds.add("contrast");
  }

  // Safe default: if nothing matched, return all components
  if (matched.length === 0) {
    return COMPONENT_RULES.map((r) => ({ id: r.id, reason: r.reason }));
  }

  return matched;
}

// ---------------------------------------------------------------------------
// Fetch a URL, extract main content, cache in session
// ---------------------------------------------------------------------------

const FETCH_TIMEOUT_MS = 15_000;
const MAX_TEXT_LENGTH = 12_000;

async function fetchPageText(url) {
  if (SESSION_CACHE.has(url)) {
    console.error(`[cache hit] ${url}`);
    return SESSION_CACHE.get(url);
  }

  console.error(`[fetching] ${url}`);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  let html;
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "context7-mini-live/1.0 (accessibility MCP server; fetches W3C/MDN docs)",
        Accept: "text/html",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    html = await res.text();
  } finally {
    clearTimeout(timer);
  }

  const root = parse(html);

  const candidates = ["#main-content", "#main", "main", "article", ".content", "body"];
  let contentNode = null;
  for (const sel of candidates) {
    contentNode = root.querySelector(sel);
    if (contentNode) break;
  }
  if (!contentNode) contentNode = root;

  for (const sel of ["nav", "header", "footer", ".navigation", ".toc", "script", "style", ".breadcrumb", ".sidebar"]) {
    contentNode.querySelectorAll(sel).forEach((el) => el.remove());
  }

  contentNode.querySelectorAll("pre").forEach((el) => {
    const code = el.text.trim();
    el.replaceWith(`\n\`\`\`\n${code}\n\`\`\`\n`);
  });

  for (const [tag, prefix] of [["h1", "# "], ["h2", "## "], ["h3", "### "], ["h4", "#### "]]) {
    contentNode.querySelectorAll(tag).forEach((el) => {
      el.replaceWith(`\n${prefix}${el.text.trim()}\n`);
    });
  }

  let text = contentNode.text
    .replace(/\t/g, " ")
    .replace(/ {3,}/g, "  ")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();

  if (text.length > MAX_TEXT_LENGTH) {
    text = text.slice(0, MAX_TEXT_LENGTH) + "\n\n[... truncated ...]";
  }

  SESSION_CACHE.set(url, text);
  return text;
}

// ---------------------------------------------------------------------------
// Fetch a list of sources in parallel and format output
// ---------------------------------------------------------------------------

async function fetchSources(sourceList) {
  const results = await Promise.allSettled(
    sourceList.map(async (src) => {
      const text = await fetchPageText(src.url);
      return { label: src.label, url: src.url, content: text };
    })
  );

  return results.map((r, i) => {
    if (r.status === "fulfilled") return r.value;
    return {
      label: sourceList[i].label,
      url: sourceList[i].url,
      content: `Error fetching: ${r.reason?.message ?? r.reason}`,
    };
  });
}

function formatFetched(fetched) {
  return fetched
    .map((r) => `## ${r.label}\nSource: ${r.url}\n\n${r.content}`)
    .join("\n\n---\n\n");
}

// ---------------------------------------------------------------------------
// MCP Server
// ---------------------------------------------------------------------------

const server = new Server(
  { name: "context7-mini-live", version: "2.0.0" },
  { capabilities: { tools: {} } }
);

// ---------------------------------------------------------------------------
// Tool definitions
// ---------------------------------------------------------------------------

const RESOLVE_COMPONENTS_TOOL = {
  name: "resolve_components",
  description:
    "CALL THIS FIRST before generating any web UI code. " +
    "Given a plain-English description of what the user wants to build " +
    "(e.g. 'submit button', 'hero image with caption', 'icon-only close button'), " +
    "returns the relevant accessibility component IDs and the reason each applies. " +
    "Then call get_component_docs and get_component_examples for each returned ID " +
    "before writing any code. This ensures accessibility is built in by default.",
  inputSchema: {
    type: "object",
    properties: {
      description: {
        type: "string",
        description:
          "Plain English description of the UI element or task. " +
          "Use the user's own words — no accessibility jargon needed. " +
          "Examples: 'primary CTA button', 'product thumbnail', 'icon next to label', " +
          "'dark mode toggle', 'logo in header'.",
      },
    },
    required: ["description"],
  },
};

const LIST_COMPONENTS_TOOL = {
  name: "list_components",
  description:
    "List all available accessibility component IDs with their source counts. " +
    "Use resolve_components first to know which ones apply to your task.",
  inputSchema: { type: "object", properties: {}, required: [] },
};

const GET_COMPONENT_DOCS_TOOL = {
  name: "get_component_docs",
  description:
    "Fetch live accessibility specification and constraint documentation for a component. " +
    "Always call resolve_components first to know which component IDs to request.",
  inputSchema: {
    type: "object",
    properties: {
      component_id: {
        type: "string",
        description: "Component ID returned by resolve_components or list_components.",
      },
    },
    required: ["component_id"],
  },
};

const GET_COMPONENT_EXAMPLES_TOOL = {
  name: "get_component_examples",
  description:
    "Fetch live accessible code examples for a component from official W3C / MDN / library sources. " +
    "Always call resolve_components first to know which component IDs to request.",
  inputSchema: {
    type: "object",
    properties: {
      component_id: {
        type: "string",
        description: "Component ID returned by resolve_components or list_components.",
      },
    },
    required: ["component_id"],
  },
};

// ---------------------------------------------------------------------------
// Tool list handler
// ---------------------------------------------------------------------------

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    RESOLVE_COMPONENTS_TOOL,
    LIST_COMPONENTS_TOOL,
    GET_COMPONENT_DOCS_TOOL,
    GET_COMPONENT_EXAMPLES_TOOL,
  ],
}));

// ---------------------------------------------------------------------------
// Tool call handler
// ---------------------------------------------------------------------------

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // ── resolve_components ────────────────────────────────────────────────────
  if (name === "resolve_components") {
    const { description } = args;
    const components = resolveComponents(description);

    const result = {
      task: description,
      components,
      next_steps: components.flatMap((c) => [
        `get_component_docs({ component_id: "${c.id}" })`,
        `get_component_examples({ component_id: "${c.id}" })`,
      ]),
      instruction:
        "Fetch docs and examples for each component above before writing any code. " +
        "This ensures the output meets WCAG AA accessibility standards by default.",
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }

  // ── list_components ───────────────────────────────────────────────────────
  if (name === "list_components") {
    const list = Object.entries(SOURCES).map(([id, def]) => ({
      id,
      title: def.title,
      docs: def.docs.length,
      examples: def.examples.length,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(list, null, 2) }],
    };
  }

  // ── get_component_docs ────────────────────────────────────────────────────
  if (name === "get_component_docs") {
    const { component_id } = args;
    const def = SOURCES[component_id];

    if (!def) {
      return {
        content: [{
          type: "text",
          text: `Error: Unknown component '${component_id}'. ` +
            `Available: ${Object.keys(SOURCES).join(", ")}`,
        }],
        isError: true,
      };
    }

    const fetched = await fetchSources(def.docs);
    const header = `<!-- ${component_id} docs — ${def.docs.length} sources -->\n\n`;

    return {
      content: [{ type: "text", text: header + formatFetched(fetched) }],
    };
  }

  // ── get_component_examples ────────────────────────────────────────────────
  if (name === "get_component_examples") {
    const { component_id } = args;
    const def = SOURCES[component_id];

    if (!def) {
      return {
        content: [{
          type: "text",
          text: `Error: Unknown component '${component_id}'. ` +
            `Available: ${Object.keys(SOURCES).join(", ")}`,
        }],
        isError: true,
      };
    }

    const fetched = await fetchSources(def.examples);
    const header = `<!-- ${component_id} examples — ${def.examples.length} sources -->\n\n`;

    return {
      content: [{ type: "text", text: header + formatFetched(fetched) }],
    };
  }

  // ── unknown tool ──────────────────────────────────────────────────────────
  return {
    content: [{ type: "text", text: `Error: Unknown tool '${name}'.` }],
    isError: true,
  };
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("context7-mini-live v2 running on stdio");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
