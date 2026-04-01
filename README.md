# context7-mini-live

A toy Context7-style MCP server that fetches accessibility documentation **live from official W3C and MDN sources** on demand — no local data files, nothing stored, always current.

## How it works

When a tool is called, the server fetches the relevant pages from:
- **W3C ARIA Authoring Practices Guide** (button patterns, keyboard interactions)
- **W3C WCAG 2.2 Understanding docs** (per success criterion)
- **W3C Web Accessibility Tutorials** (image tutorials, alt-text decision tree)
- **MDN Web Docs** (HTML element reference)

Content is extracted from the `<main>` region, cleaned to plain text + fenced code blocks, and returned directly — nothing is written to disk. A session-level in-memory cache avoids re-fetching the same URL twice within one server session.

## Setup

```bash
cd context7_mini_live
npm install
```

Requires Node.js 18+ (for built-in `fetch`).

## Running the server

```bash
node index.js
```

The server communicates over stdio (standard MCP transport).

## Connecting to Claude Code

Add this to your `~/.claude/settings.json` under `mcpServers`:

```json
{
  "mcpServers": {
    "context7-mini-live": {
      "command": "node",
      "args": ["/absolute/path/to/index.js"]
    }
  }
}
```

or 

```
claude mcp add context7-mini-live -- node /absolute/path/to/index.js
```

Then restart Claude Code. The three tools below will be available.

## Tools

### `list_components`
Lists available component IDs with their live source URLs.

```
Input:  (none)
Output: [{ id, title, doc_sources[], example_sources[] }]
```

### `get_component_docs`
Fetches live spec/constraint documentation from W3C for a component.

```
Input:  { component_id: "buttons" | "images" }
Output: Extracted text from each source page, with source URL shown
```

### `get_component_examples`
Fetches live accessible code examples from W3C / MDN for a component.

```
Input:  { component_id: "buttons" | "images" }
Output: Extracted text + code blocks from each example page, with source URL shown
```

## Example queries to ask Claude

- *"Create a button for "next page"?"* → `get_component_docs({ component_id: "buttons" })`
- *"What are the accessibility rules for buttons?"* → `get_component_docs({ component_id: "buttons" })`
- *"Show me W3C examples for accessible images."* → `get_component_examples({ component_id: "images" })`
- *"What does WCAG say about alt text?"* → `get_component_docs({ component_id: "images" })`

## Adding more sources

Edit [sources.js](sources.js) — add entries to the `docs` or `examples` arrays for any component. Each entry needs:

```js
{
  label: "Human-readable name",
  url: "https://example.com/the-page",
  selector: "main",   // CSS selector for the content region
}
```

No changes to `index.js` needed.
