/**
 * sources.js — Authoritative live sources for each accessibility component.
 *
 * Each component has a flat docs[] and examples[] array.
 * Content is always live-fetched on demand — nothing is stored locally.
 */

export const SOURCES = {

  // ══════════════════════════════════════════════════════════════════════════
  // BUTTONS
  // ══════════════════════════════════════════════════════════════════════════
  buttons: {
    title: "Accessible Buttons",

    docs: [
      {
        label: "W3C ARIA Spec — Button Role Definition",
        url: "https://w3c.github.io/aria/#button",
      },
      {
        label: "ARIA Authoring Practices Guide — Button Pattern",
        url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
      },
      {
        label: "Be Accessible — Button Accessibility Guide",
        url: "https://beaccessible.com/post/button-accessibility/",
      },
      {
        label: "W3C ACT Rule — Button Has Accessible Name",
        url: "https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/",
      },
      {
        label: "MDN — ARIA Button Role",
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role",
      },
      {
        label: "A11y Style Guide — General Accessibility Patterns",
        url: "https://a11y-style-guide.com/style-guide/section-general.html",
      },
      {
        label: "Accessibly App — Accessible Buttons Guide",
        url: "https://accessiblyapp.com/web-accessibility/buttons/",
      },
    ],

    examples: [
      {
        label: "ARIA Authoring Practices Guide — Button Pattern Live Examples",
        url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CONTRAST
  // ══════════════════════════════════════════════════════════════════════════
  contrast: {
    title: "Accessible Color Contrast",

    docs: [
      {
        label: "WCAG 2.2 — 1.4.3 Contrast Minimum (4.5:1 Text, 3:1 Large Text)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
      },
      {
        label: "WCAG 2.2 — 1.4.11 Non-text Contrast (UI Components, Focus Rings)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast",
      },
      {
        label: "WebAIM — Contrast and Color Accessibility",
        url: "https://webaim.org/articles/contrast/",
      },
      {
        label: "WCAG 2.2 — Relative Luminance Formula",
        url: "https://www.w3.org/TR/WCAG22/#dfn-relative-luminance",
      },
      {
        label: "WCAG 2.2 — 1.4.6 Contrast Enhanced (7:1 AAA)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced",
      },
 
      {
        label: "MDN — Understanding Colors and Luminance",
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance",
      },
  
      {
        label: "Deque University — color-contrast Axe Rule",
        url: "https://dequeuniversity.com/rules/axe/4.4/color-contrast",
      },
      {
        label: "Section 508 — Making Color Usage Accessible",
        url: "https://www.section508.gov/create/making-color-usage-accessible/",
      },
    ],

    examples: [
      {
        label: "W3C Technique G18 — Achieving 4.5:1 for Normal Text",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G18",
      },
      {
        label: "W3C Technique G145 — Achieving 3:1 for Large Text",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G145",
      },
      {
        label: "WebAIM — Contrast Checker (Ratio Explanations)",
        url: "https://webaim.org/resources/contrastchecker/",
      },
      {
        label: "W3C Technique G183 — 3:1 Contrast for Links Without Underline",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G183",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // IMAGES
  // ══════════════════════════════════════════════════════════════════════════
  images: {
    title: "Accessible Images",

    docs: [
      {
        label: "W3C WAI — Alt Text Decision Tree",
        url: "https://www.w3.org/WAI/tutorials/images/decision-tree/",
      },
      {
        label: "WCAG 2.2 — 1.1.1 Non-text Content",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content",
      },

      {
        label: "WCAG Technique H67 — Null Alt Text for Decorative Images",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H67",
      },

      {
        label: "W3C WAI — Images Tutorial Overview",
        url: "https://www.w3.org/WAI/tutorials/images/",
      },
      {
        label: "WCAG Failure F39 — Placeholder Alt Text (Spaces/Underscores)",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F39",
      },
      {
        label: "MDN — HTML img Element",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
      },
      {
        label: "MDN — Accessibility: Images and Multimedia",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia",
      },
      {
        label: "WebAIM — Techniques for Images",
        url: "https://webaim.org/techniques/images/",
      },
      {
        label: "A11y Project — Alt Text",
        url: "https://www.a11yproject.com/posts/alt-text/",
      },
      {
        label: "Harvard University — Describing Content Images",
        url: "https://accessibility.huit.harvard.edu/describe-content-images",
      },
      {
        label: "ASU Accessibility — Images",
        url: "https://accessibility.asu.edu/articles/images",
      },
      {
        label: "ALA — Build Better Images",
        url: "https://www.ala.org/accessibility/build-better-images",
      },
      {
        label: "AudioEye — Image Accessibility Standards",
        url: "https://www.audioeye.com/post/image-accessibility-standards/",
      },
      {
        label: "Recite Me — How to Create Accessible Images",
        url: "https://reciteme.com/us/news/how-to-create-accessible-images/",
      },
    ],

    examples: [
      {
        label: "W3C WAI — Informative Images",
        url: "https://www.w3.org/WAI/tutorials/images/informative/",
      },
      {
        label: "W3C WAI — Decorative Images",
        url: "https://www.w3.org/WAI/tutorials/images/decorative/",
      },
      {
        label: "W3C WAI — Functional Images (Inside Links and Buttons)",
        url: "https://www.w3.org/WAI/tutorials/images/functional/",
      },
      {
        label: "W3C WAI — Complex Images (Charts, Graphs)",
        url: "https://www.w3.org/WAI/tutorials/images/complex/",
      },
    ],
  },
};
