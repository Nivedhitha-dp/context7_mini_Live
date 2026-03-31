/**
 * sources.js — Authoritative live URLs for each component.
 *
 * Each source has:
 *   label    — human-readable name shown in results
 *   url      — the live page to fetch from
 *   selector — CSS selector for the main content block on that page
 *   tags     — keywords used by the query filter in get_component_docs /
 *              get_component_examples. Keep tags lowercase and hyphenated.
 *
 * Tag conventions:
 *   wcag, wcag21, aria, html, mdn          — spec/source authority
 *   alt-text, keyboard, contrast, focus,
 *   name, role, state, value               — accessibility concept
 *   decorative, informative, functional,
 *   complex, null-alt, icon-button, toggle — element sub-type
 *   technique, failure, quickref, spec     — document type
 *   react, astro, design-system            — framework/library
 *   checklist, writing-guide, how-to,
 *   explainer, tool, source-code, npm      — content format
 */

export const SOURCES = {
  // ══════════════════════════════════════════════════════════════════════════
  // BUTTONS
  // ══════════════════════════════════════════════════════════════════════════
  buttons: {
    title: "Accessible Buttons",
    docs: [
      // ── W3C / ARIA official ───────────────────────────────────────────────
      {
        label: "ARIA APG — Button Pattern",
        url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
        selector: "main",
        tags: ["aria", "role", "keyboard", "pattern", "accessible-name", "focus", "states", "toggle", "semantic"],
      },
      {
        label: "WCAG 2.2 Understanding — 4.1.2 Name, Role, Value",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value",
        selector: "#main",
        tags: ["wcag", "name", "role", "value", "aria-label", "accessible-name", "4.1.2"],
      },
      {
        label: "WCAG 2.2 Understanding — 2.1.1 Keyboard",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard",
        selector: "#main",
        tags: ["wcag", "keyboard", "focus", "tab", "enter", "space", "2.1.1"],
      },
      {
        label: "WCAG 2.2 Understanding — 1.4.3 Contrast (Minimum)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
        selector: "#main",
        tags: ["wcag", "contrast", "color", "text-contrast", "ratio", "1.4.3"],
      },
      {
        label: "WCAG 2.2 — Quick Reference",
        url: "https://www.w3.org/WAI/WCAG22/quickref/",
        selector: "main",
        tags: ["wcag", "quickref", "all-criteria", "reference"],
      },
      {
        label: "W3C WAI-ARIA APG — Main guide",
        url: "https://www.w3.org/WAI/ARIA/apg/",
        selector: "main",
        tags: ["aria", "patterns", "widgets", "overview", "semantic"],
      },
      // ── MDN ──────────────────────────────────────────────────────────────
      {
        label: "MDN — ARIA button role",
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role",
        selector: "article",
        tags: ["mdn", "aria", "role", "button-role", "custom-button", "div-button", "semantic"],
      },
      {
        label: "MDN — HTML Accessibility guide",
        url: "https://github.com/mdn/content/blob/main/files/en-us/learn_web_development/core/accessibility/html/index.md",
        selector: "article",
        tags: ["mdn", "html", "semantic", "accessible-name", "roles", "general"],
      },
      // ── Design systems ────────────────────────────────────────────────────
      {
        label: "U.S. Web Design System — Button component",
        url: "https://designsystem.digital.gov/components/button/",
        selector: "main",
        tags: ["design-system", "implementation", "variants", "states", "disabled", "styles", "uswds"],
      },
      {
        label: "A11y Style Guide — General accessibility patterns",
        url: "https://a11y-style-guide.com/style-guide/section-general.html",
        selector: "main",
        tags: ["pattern", "checklist", "implementation", "general"],
      },
      // ── Practitioner guides ───────────────────────────────────────────────
      {
        label: "Accessibly App — Accessible buttons guide",
        url: "https://accessiblyapp.com/web-accessibility/buttons/",
        selector: "main",
        tags: ["checklist", "implementation", "accessible-name", "role", "keyboard", "how-to"],
      },
    ],
    examples: [
      {
        label: "ARIA APG — Button Pattern live examples",
        url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/",
        selector: "main",
        tags: ["aria", "live-example", "toggle", "icon-button", "keyboard", "focus"],
      },
      {
        label: "MDN — The Button element",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
        selector: "article",
        tags: ["mdn", "html", "element", "attributes", "type", "disabled", "form"],
      },
      {
        label: "WebAIM — Non-text Contrast (1.4.11) examples",
        url: "https://webaim.org/temp/1-4-11examples.html",
        selector: "#main",
        tags: ["contrast", "non-text", "focus-ring", "ui-components", "1.4.11", "live-example"],
      },
      {
        label: "React Aria — useButton documentation",
        url: "https://react-aria.adobe.com/docs/components/button",
        selector: "main",
        tags: ["react", "hook", "implementation", "keyboard", "focus", "press", "usebutton"],
      },
      {
        label: "React Aria — Official site",
        url: "https://react-aria.adobe.com/",
        selector: "main",
        tags: ["react", "component-library", "accessible", "implementation", "overview"],
      },
      {
        label: "React Aria — GitHub source",
        url: "https://github.com/adobe/react-spectrum/tree/main/packages/react-aria",
        selector: "article",
        tags: ["react", "source-code", "implementation", "typescript"],
      },
      {
        label: "Accessible Astro — Documentation",
        url: "https://accessible-astro.build/",
        selector: "main",
        tags: ["astro", "component-library", "accessible", "overview"],
      },
      {
        label: "Accessible Astro — GitHub repository",
        url: "https://github.com/markteekman/accessible-astro-components",
        selector: "article",
        tags: ["astro", "source-code", "implementation", "component"],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CONTRAST
  // ══════════════════════════════════════════════════════════════════════════
  contrast: {
    title: "Accessible Color Contrast",
    docs: [
      // ── WCAG 2.2 contrast criteria ────────────────────────────────────────
      {
        label: "WCAG 2.2 Understanding — 1.4.3 Contrast (Minimum) AA",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
        selector: "#main",
        tags: ["wcag", "contrast", "text", "ratio", "4.5:1", "3:1", "large-text", "aa", "1.4.3"],
      },
      {
        label: "WCAG 2.2 Understanding — 1.4.6 Contrast (Enhanced) AAA",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced",
        selector: "#main",
        tags: ["wcag", "contrast", "text", "ratio", "7:1", "4.5:1", "aaa", "enhanced", "1.4.6"],
      },
      {
        label: "WCAG 2.2 Understanding — 1.4.11 Non-text Contrast",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast",
        selector: "#main",
        tags: ["wcag", "contrast", "ui-components", "focus-ring", "icons", "non-text", "3:1", "1.4.11"],
      },
      // ── WCAG 2.2 full references ──────────────────────────────────────────
      {
        label: "WCAG 2.2 — Quick Reference",
        url: "https://www.w3.org/WAI/WCAG22/quickref/",
        selector: "main",
        tags: ["wcag", "quickref", "all-criteria", "reference"],
      },
      {
        label: "WCAG 2.2 — Full Specification",
        url: "https://www.w3.org/TR/WCAG22/",
        selector: "#toc",
        tags: ["wcag", "spec", "normative", "reference", "full-spec"],
      },
      {
        label: "WCAG 2.2 — Relative Luminance definition",
        url: "https://www.w3.org/TR/WCAG22/#dfn-relative-luminance",
        selector: "body",
        tags: ["luminance", "formula", "math", "calculation", "wcag", "relative-luminance"],
      },
      // ── WCAG 2.1 ─────────────────────────────────────────────────────────
      {
        label: "WCAG 2.1 — Quick Reference",
        url: "https://www.w3.org/WAI/WCAG21/quickref/",
        selector: "main",
        tags: ["wcag21", "quickref", "reference", "baseline"],
      },
      {
        label: "WCAG 2.1 — Full Specification",
        url: "https://www.w3.org/TR/WCAG21/",
        selector: "#toc",
        tags: ["wcag21", "spec", "normative", "reference", "full-spec"],
      },
      {
        label: "WCAG 2.1 Understanding — 1.4.3 Contrast (Minimum)",
        url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum",
        selector: "#main",
        tags: ["wcag21", "contrast", "text", "ratio", "1.4.3", "baseline"],
      },
      // ── MDN ──────────────────────────────────────────────────────────────
      {
        label: "MDN — Understanding Colors and Luminance",
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance",
        selector: "article",
        tags: ["mdn", "luminance", "color-math", "relative-luminance", "perception", "formula"],
      },
      // ── Practitioner / industry guides ───────────────────────────────────
      {
        label: "WebAIM — Contrast and Color Accessibility",
        url: "https://webaim.org/articles/contrast/",
        selector: "#main",
        tags: ["contrast", "ratio", "tools", "text", "background", "implementation", "webaim"],
      },
      {
        label: "A11y Project — What is color contrast?",
        url: "https://www.a11yproject.com/posts/what-is-color-contrast/",
        selector: "main",
        tags: ["contrast", "overview", "ratio", "beginner", "explainer"],
      },
      {
        label: "Deque University — color-contrast axe rule",
        url: "https://dequeuniversity.com/rules/axe/4.4/color-contrast",
        selector: "main",
        tags: ["automated-testing", "axe", "contrast", "failure", "rule", "deque"],
      },
      {
        label: "Section 508 — Making color usage accessible",
        url: "https://www.section508.gov/create/making-color-usage-accessible/",
        selector: "main",
        tags: ["color", "section-508", "federal", "compliance", "color-alone", "color-meaning"],
      },
      {
        label: "UCLA Brand — Accessibility: Color and type",
        url: "https://brand.ucla.edu/fundamentals/accessibility/color-type",
        selector: "main",
        tags: ["color", "typography", "design", "brand", "implementation"],
      },
    ],
    examples: [
      {
        label: "W3C Technique G18 — Contrast ratio at least 4.5:1",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G18",
        selector: "#main",
        tags: ["technique", "text-contrast", "4.5:1", "aa", "normal-text", "code-example"],
      },
      {
        label: "W3C Technique G145 — Contrast ratio at least 3:1 for large text",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G145",
        selector: "#main",
        tags: ["technique", "large-text", "3:1", "heading", "18pt", "code-example"],
      },
      {
        label: "W3C Technique G183 — 3:1 contrast for links without underline",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G183",
        selector: "#main",
        tags: ["technique", "links", "underline", "3:1", "color-only", "code-example"],
      },
      {
        label: "WebAIM — Contrast Checker",
        url: "https://webaim.org/resources/contrastchecker/",
        selector: "#main",
        tags: ["tool", "checker", "ratio", "hex", "calculation", "webaim"],
      },
      {
        label: "BBC — color-contrast-checker (GitHub)",
        url: "https://github.com/bbc/color-contrast-checker",
        selector: "article",
        tags: ["javascript", "source-code", "library", "wcag", "algorithm", "programmatic"],
      },
      {
        label: "BBC — @bbc/color-contrast-checker (NPM)",
        url: "https://www.npmjs.com/package/@bbc/color-contrast-checker",
        selector: "#readme",
        tags: ["javascript", "npm", "library", "programmatic", "implementation", "api"],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // IMAGES
  // ══════════════════════════════════════════════════════════════════════════
  images: {
    title: "Accessible Images",
    docs: [
      // ── W3C / ARIA official ───────────────────────────────────────────────
      {
        label: "W3C WAI — Images Tutorial Overview",
        url: "https://www.w3.org/WAI/tutorials/images/",
        selector: "main",
        tags: ["wcag", "overview", "types", "informative", "decorative", "functional", "complex", "alt-text"],
      },
      {
        label: "WCAG 2.2 Understanding — 1.1.1 Non-text Content",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content",
        selector: "#main",
        tags: ["wcag", "1.1.1", "alt-text", "non-text", "purpose", "captcha", "decorative"],
      },
      {
        label: "W3C WAI — Alt Text Decision Tree",
        url: "https://www.w3.org/WAI/tutorials/images/decision-tree/",
        selector: "main",
        tags: ["alt-text", "decision-tree", "when-to-use", "type-selection", "decorative", "informative"],
      },
      {
        label: "WCAG 2.2 — Quick Reference",
        url: "https://www.w3.org/WAI/WCAG22/quickref/",
        selector: "main",
        tags: ["wcag", "quickref", "all-criteria", "reference"],
      },
      // ── WCAG HTML techniques & failures ──────────────────────────────────
      {
        label: "WCAG Technique H37 — Using alt on img elements",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H37",
        selector: "#main",
        tags: ["technique", "alt-attribute", "html", "wcag", "h37", "informative", "required"],
      },
      {
        label: "WCAG Technique H67 — Null alt text for decorative images",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H67",
        selector: "#main",
        tags: ["technique", "decorative", "null-alt", "empty-alt", "css-image", "h67"],
      },
      {
        label: "WCAG Failure F39 — Placeholder alt text (spaces/underscores)",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F39",
        selector: "#main",
        tags: ["failure", "placeholder-alt", "spaces", "f39", "common-mistake", "bad-practice"],
      },
      // ── MDN ──────────────────────────────────────────────────────────────
      {
        label: "MDN — HTML img element",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
        selector: "article",
        tags: ["mdn", "html", "element", "attributes", "srcset", "loading", "sizes", "width", "height"],
      },
      {
        label: "MDN — Accessibility: Images and multimedia",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Accessibility/Images_and_multimedia",
        selector: "article",
        tags: ["mdn", "multimedia", "video", "audio", "captions", "learn", "alt-text"],
      },
      // ── Accessibility organisations ───────────────────────────────────────
      {
        label: "WebAIM — Techniques for Images",
        url: "https://webaim.org/techniques/images/",
        selector: "#main",
        tags: ["techniques", "alt-text", "figure", "css-background", "svg", "webaim", "how-to"],
      },
      {
        label: "WebAIM — Alt Text guide",
        url: "https://webaim.org/articles/alttext/",
        selector: "#main",
        tags: ["alt-text", "writing-guide", "decision", "types", "webaim", "how-to"],
      },
      {
        label: "A11y Project — Alt text",
        url: "https://www.a11yproject.com/posts/alt-text/",
        selector: "main",
        tags: ["alt-text", "writing-guide", "concise", "context", "explainer"],
      },
      {
        label: "Harvard University IT — Describing content images",
        url: "https://accessibility.huit.harvard.edu/describe-content-images",
        selector: "main",
        tags: ["alt-text", "description", "context", "writing-guide", "how-to"],
      },
      {
        label: "ASU Accessibility — Images",
        url: "https://accessibility.asu.edu/articles/images",
        selector: "main",
        tags: ["alt-text", "types", "checklist", "writing-guide", "overview"],
      },
      {
        label: "ALA — Build better images",
        url: "https://www.ala.org/accessibility/build-better-images",
        selector: "main",
        tags: ["alt-text", "quality", "context", "writing-guide", "best-practices"],
      },
      // ── Practitioner / industry guides ───────────────────────────────────
      {
        label: "AudioEye — Image accessibility standards",
        url: "https://www.audioeye.com/post/image-accessibility-standards/",
        selector: "main",
        tags: ["standards", "wcag", "overview", "alt-text", "compliance", "svg"],
      },
      {
        label: "Recite Me — How to create accessible images",
        url: "https://reciteme.com/us/news/how-to-create-accessible-images/",
        selector: "main",
        tags: ["how-to", "alt-text", "writing-guide", "screen-reader", "step-by-step"],
      },
      {
        label: "UCLA Brand — Accessibility: Images",
        url: "https://brand.ucla.edu/fundamentals/accessibility/images",
        selector: "main",
        tags: ["brand", "design", "alt-text", "marketing", "implementation"],
      },
    ],
    examples: [
      {
        label: "W3C WAI — Informative Images",
        url: "https://www.w3.org/WAI/tutorials/images/informative/",
        selector: "main",
        tags: ["informative", "alt-text", "code-example", "meaningful", "content"],
      },
      {
        label: "W3C WAI — Decorative Images",
        url: "https://www.w3.org/WAI/tutorials/images/decorative/",
        selector: "main",
        tags: ["decorative", "null-alt", "aria-hidden", "code-example", "empty-alt"],
      },
      {
        label: "W3C WAI — Functional Images",
        url: "https://www.w3.org/WAI/tutorials/images/functional/",
        selector: "main",
        tags: ["functional", "link-image", "button-image", "alt-text", "code-example", "action"],
      },
      {
        label: "W3C WAI — Complex Images",
        url: "https://www.w3.org/WAI/tutorials/images/complex/",
        selector: "main",
        tags: ["complex", "chart", "graph", "long-description", "figcaption", "aria-describedby", "code-example"],
      },
      {
        label: "Accessible Astro — Media component",
        url: "https://accessible-astro.build/components/media/",
        selector: "main",
        tags: ["astro", "media", "video", "image", "component", "implementation"],
      },
      {
        label: "Accessible Astro — Card component",
        url: "https://accessible-astro.build/components/card/",
        selector: "main",
        tags: ["astro", "card", "figure", "image-in-context", "component", "implementation"],
      },
      {
        label: "Accessible Astro — Documentation",
        url: "https://accessible-astro.build/",
        selector: "main",
        tags: ["astro", "component-library", "accessible", "overview"],
      },
      {
        label: "Accessible Astro — GitHub repository",
        url: "https://github.com/markteekman/accessible-astro-components",
        selector: "article",
        tags: ["astro", "source-code", "implementation", "component"],
      },
    ],
  },
};
