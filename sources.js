/**
 * sources.js — Authoritative live sources for each accessibility component.
 *
 * Each component has two source tiers:
 *
 *   core     — 4-5 most essential sources. Always fetched by default.
 *              Choose the most authoritative, practical, and up-to-date pages.
 *
 *   extended — The broader reference library. Fetched when extended: true is
 *              passed to get_component_docs / get_component_examples.
 *
 * No tags — routing is handled by resolve_components() using plain UI
 * vocabulary, not accessibility jargon. Content is always live-fetched.
 */

export const SOURCES = {

  // ══════════════════════════════════════════════════════════════════════════
  // BUTTONS
  // ══════════════════════════════════════════════════════════════════════════
  buttons: {
    title: "Accessible Buttons",

    docs: {
      core: [
        {
          label: "ARIA APG — Button Pattern (keyboard, roles, states)",
          url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
          selector: "main",
        },
        {
          label: "WCAG 2.2 — 4.1.2 Name, Role, Value (accessible name)",
          url: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value",
          selector: "#main",
        },
        {
          label: "WCAG 2.2 — 2.1.1 Keyboard operability",
          url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard",
          selector: "#main",
        },
        {
          label: "MDN — ARIA button role",
          url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role",
          selector: "article",
        },
        {
          label: "U.S. Web Design System — Button component",
          url: "https://designsystem.digital.gov/components/button/",
          selector: "main",
        },
      ],
      extended: [
        {
          label: "WCAG 2.2 — 1.4.3 Contrast (Minimum) for button text",
          url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
          selector: "#main",
        },
        {
          label: "W3C WAI-ARIA APG — Full guide",
          url: "https://www.w3.org/WAI/ARIA/apg/",
          selector: "main",
        },
        {
          label: "WCAG 2.2 — Quick Reference",
          url: "https://www.w3.org/WAI/WCAG22/quickref/",
          selector: "main",
        },
        {
          label: "MDN — HTML Accessibility guide",
          url: "https://github.com/mdn/content/blob/main/files/en-us/learn_web_development/core/accessibility/html/index.md",
          selector: "article",
        },
        {
          label: "A11y Style Guide — General accessibility patterns",
          url: "https://a11y-style-guide.com/style-guide/section-general.html",
          selector: "main",
        },
        {
          label: "Accessibly App — Accessible buttons guide",
          url: "https://accessiblyapp.com/web-accessibility/buttons/",
          selector: "main",
        },
      ],
    },

    examples: {
      core: [
        {
          label: "ARIA APG — Button Pattern live examples",
          url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/",
          selector: "main",
        },
        {
          label: "MDN — The Button element (attributes, types, disabled)",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
          selector: "article",
        },
        {
          label: "React Aria — useButton documentation",
          url: "https://react-aria.adobe.com/docs/components/button",
          selector: "main",
        },
      ],
      extended: [
        {
          label: "WebAIM — Non-text Contrast (1.4.11) examples",
          url: "https://webaim.org/temp/1-4-11examples.html",
          selector: "#main",
        },
        {
          label: "React Aria — Official site",
          url: "https://react-aria.adobe.com/",
          selector: "main",
        },
        {
          label: "React Aria — GitHub source",
          url: "https://github.com/adobe/react-spectrum/tree/main/packages/react-aria",
          selector: "article",
        },
        {
          label: "Accessible Astro — Documentation",
          url: "https://accessible-astro.build/",
          selector: "main",
        },
        {
          label: "Accessible Astro — GitHub repository",
          url: "https://github.com/markteekman/accessible-astro-components",
          selector: "article",
        },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CONTRAST
  // ══════════════════════════════════════════════════════════════════════════
  contrast: {
    title: "Accessible Color Contrast",

    docs: {
      core: [
        {
          label: "WCAG 2.2 — 1.4.3 Contrast Minimum (4.5:1 text, 3:1 large text)",
          url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
          selector: "#main",
        },
        {
          label: "WCAG 2.2 — 1.4.11 Non-text Contrast (UI components, focus rings)",
          url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast",
          selector: "#main",
        },
        {
          label: "WebAIM — Contrast and Color Accessibility",
          url: "https://webaim.org/articles/contrast/",
          selector: "#main",
        },
        {
          label: "WCAG 2.2 — Relative Luminance formula",
          url: "https://www.w3.org/TR/WCAG22/#dfn-relative-luminance",
          selector: "body",
        },
      ],
      extended: [
        {
          label: "WCAG 2.2 — 1.4.6 Contrast Enhanced (7:1 AAA)",
          url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced",
          selector: "#main",
        },
        {
          label: "WCAG 2.2 — Quick Reference",
          url: "https://www.w3.org/WAI/WCAG22/quickref/",
          selector: "main",
        },
        {
          label: "WCAG 2.2 — Full Specification",
          url: "https://www.w3.org/TR/WCAG22/",
          selector: "#toc",
        },
        {
          label: "WCAG 2.1 — 1.4.3 Contrast (widely deployed baseline)",
          url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum",
          selector: "#main",
        },
        {
          label: "WCAG 2.1 — Quick Reference",
          url: "https://www.w3.org/WAI/WCAG21/quickref/",
          selector: "main",
        },
        {
          label: "MDN — Understanding Colors and Luminance",
          url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance",
          selector: "article",
        },
        {
          label: "A11y Project — What is color contrast?",
          url: "https://www.a11yproject.com/posts/what-is-color-contrast/",
          selector: "main",
        },
        {
          label: "Deque University — color-contrast axe rule",
          url: "https://dequeuniversity.com/rules/axe/4.4/color-contrast",
          selector: "main",
        },
        {
          label: "Section 508 — Making color usage accessible",
          url: "https://www.section508.gov/create/making-color-usage-accessible/",
          selector: "main",
        },
        {
          label: "UCLA Brand — Color and type accessibility",
          url: "https://brand.ucla.edu/fundamentals/accessibility/color-type",
          selector: "main",
        },
      ],
    },

    examples: {
      core: [
        {
          label: "W3C Technique G18 — Achieving 4.5:1 for normal text",
          url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G18",
          selector: "#main",
        },
        {
          label: "W3C Technique G145 — Achieving 3:1 for large text",
          url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G145",
          selector: "#main",
        },
        {
          label: "WebAIM — Contrast Checker (ratio explanations)",
          url: "https://webaim.org/resources/contrastchecker/",
          selector: "#main",
        },
      ],
      extended: [
        {
          label: "W3C Technique G183 — 3:1 contrast for links without underline",
          url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G183",
          selector: "#main",
        },
        {
          label: "BBC — color-contrast-checker (GitHub)",
          url: "https://github.com/bbc/color-contrast-checker",
          selector: "article",
        },
        {
          label: "BBC — @bbc/color-contrast-checker (NPM)",
          url: "https://www.npmjs.com/package/@bbc/color-contrast-checker",
          selector: "#readme",
        },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // IMAGES
  // ══════════════════════════════════════════════════════════════════════════
  images: {
    title: "Accessible Images",

    docs: {
      core: [
        {
          label: "W3C WAI — Alt Text Decision Tree",
          url: "https://www.w3.org/WAI/tutorials/images/decision-tree/",
          selector: "main",
        },
        {
          label: "WCAG 2.2 — 1.1.1 Non-text Content",
          url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content",
          selector: "#main",
        },
        {
          label: "WCAG Technique H37 — Using alt attribute on img elements",
          url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H37",
          selector: "#main",
        },
        {
          label: "WCAG Technique H67 — Null alt text for decorative images",
          url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H67",
          selector: "#main",
        },
        {
          label: "WebAIM — Alt Text guide",
          url: "https://webaim.org/articles/alttext/",
          selector: "#main",
        },
      ],
      extended: [
        {
          label: "W3C WAI — Images Tutorial Overview",
          url: "https://www.w3.org/WAI/tutorials/images/",
          selector: "main",
        },
        {
          label: "WCAG Failure F39 — Placeholder alt text (spaces/underscores)",
          url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F39",
          selector: "#main",
        },
        {
          label: "WCAG 2.2 — Quick Reference",
          url: "https://www.w3.org/WAI/WCAG22/quickref/",
          selector: "main",
        },
        {
          label: "MDN — HTML img element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
          selector: "article",
        },
        {
          label: "MDN — Accessibility: Images and multimedia",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Accessibility/Images_and_multimedia",
          selector: "article",
        },
        {
          label: "WebAIM — Techniques for Images",
          url: "https://webaim.org/techniques/images/",
          selector: "#main",
        },
        {
          label: "A11y Project — Alt text",
          url: "https://www.a11yproject.com/posts/alt-text/",
          selector: "main",
        },
        {
          label: "Harvard University IT — Describing content images",
          url: "https://accessibility.huit.harvard.edu/describe-content-images",
          selector: "main",
        },
        {
          label: "ASU Accessibility — Images",
          url: "https://accessibility.asu.edu/articles/images",
          selector: "main",
        },
        {
          label: "ALA — Build better images",
          url: "https://www.ala.org/accessibility/build-better-images",
          selector: "main",
        },
        {
          label: "AudioEye — Image accessibility standards",
          url: "https://www.audioeye.com/post/image-accessibility-standards/",
          selector: "main",
        },
        {
          label: "Recite Me — How to create accessible images",
          url: "https://reciteme.com/us/news/how-to-create-accessible-images/",
          selector: "main",
        },
        {
          label: "UCLA Brand — Accessibility: Images",
          url: "https://brand.ucla.edu/fundamentals/accessibility/images",
          selector: "main",
        },
      ],
    },

    examples: {
      core: [
        {
          label: "W3C WAI — Informative Images",
          url: "https://www.w3.org/WAI/tutorials/images/informative/",
          selector: "main",
        },
        {
          label: "W3C WAI — Decorative Images",
          url: "https://www.w3.org/WAI/tutorials/images/decorative/",
          selector: "main",
        },
        {
          label: "W3C WAI — Functional Images (inside links/buttons)",
          url: "https://www.w3.org/WAI/tutorials/images/functional/",
          selector: "main",
        },
      ],
      extended: [
        {
          label: "W3C WAI — Complex Images (charts, graphs)",
          url: "https://www.w3.org/WAI/tutorials/images/complex/",
          selector: "main",
        },
        {
          label: "Accessible Astro — Media component",
          url: "https://accessible-astro.build/components/media/",
          selector: "main",
        },
        {
          label: "Accessible Astro — Card component",
          url: "https://accessible-astro.build/components/card/",
          selector: "main",
        },
        {
          label: "Accessible Astro — Documentation",
          url: "https://accessible-astro.build/",
          selector: "main",
        },
        {
          label: "Accessible Astro — GitHub repository",
          url: "https://github.com/markteekman/accessible-astro-components",
          selector: "article",
        },
      ],
    },
  },
};
