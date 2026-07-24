## 7. HTML5 (111 questions)

### Basic

1. **What is HTML?** — HyperText Markup Language, the standard for structuring web content.
2. **What is HTML5?** — The fifth major HTML version adding semantic elements, multimedia, and rich APIs.
3. **What is the `<!DOCTYPE html>` declaration?** — Tells the browser to use standards mode with HTML5.
4. **What is an element?** — A building block defined by tags, e.g., `<p>text</p>`.
5. **What is an attribute?** — Extra information on an element, like `href` or `class`.
6. **What are semantic elements?** — Tags conveying meaning: `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`.
7. **Why use semantic HTML?** — Better accessibility, SEO, and maintainability.
8. **What is the `<head>` section?** — Metadata container (title, links, meta) not rendered as content.
9. **What is the `<body>`?** — The visible page content.
10. **What is a `<meta>` tag?** — Metadata like charset, viewport, and description.
11. **What is the viewport meta tag?** — `<meta name="viewport" content="width=device-width, initial-scale=1">` for responsive scaling.
12. **What is an anchor tag?** — `<a href>` creating hyperlinks.
13. **What is the difference between block and inline elements?** — Block elements start on a new line and take full width; inline flow within text.
14. **What is a `<div>` vs `<span>`?** — `<div>` is a block container; `<span>` is an inline container.
15. **How do you create a list?** — `<ul>`/`<ol>` with `<li>` items.
16. **How do you insert an image?** — `<img src="..." alt="...">`.
17. **Why is the `alt` attribute important?** — It provides accessible/fallback text for images.
18. **What are heading tags?** — `<h1>`–`<h6>` defining document hierarchy.
19. **What is a table structure?** — `<table>` with `<tr>`, `<th>`, and `<td>`.
20. **What is a form?** — `<form>` collecting user input for submission.
21. **What are common input types in HTML5?** — text, email, number, date, checkbox, radio, range, color, file.
22. **What is the `placeholder` attribute?** — Hint text shown in empty input fields.
23. **What is the `required` attribute?** — Marks a field as mandatory before submission.
24. **What is the `<label>` element?** — Associates descriptive text with a form control for accessibility.
25. **What is the `for` attribute on labels?** — Links a label to an input by the input's `id`.
26. **What are `<audio>` and `<video>` tags?** — Native HTML5 elements to embed media without plugins.
27. **What is the `<canvas>` element?** — A drawable region for graphics via JavaScript.
28. **What is `<svg>`?** — Scalable Vector Graphics markup for resolution-independent images.
29. **What is the `<nav>` element?** — A section containing navigation links.
30. **What is the `<footer>` element?** — Content at the bottom of a page/section (author, copyright).
31. **What is the `id` attribute?** — A unique identifier for an element.
32. **What is the `class` attribute?** — A reusable identifier for styling/scripting multiple elements.
33. **What is the difference between `id` and `class`?** — `id` is unique per page; `class` can be shared.
34. **What is an entity like `&amp;`?** — An escape code representing reserved/special characters.
35. **What is the `title` attribute?** — Tooltip text shown on hover.
36. **What is the `target="_blank"` attribute?** — Opens a link in a new tab/window.
37. **What is a hyperlink `mailto:`?** — A link that opens the user's email client.

### Medium

38. **What is the difference between `<section>` and `<div>`?** — `<section>` is semantic (a thematic grouping); `<div>` is a generic container.
39. **When use `<article>`?** — For self-contained, independently distributable content (a post, comment, card).
40. **What is the `<figure>`/`<figcaption>`?** — Groups media with an associated caption.
41. **What are data attributes?** — Custom `data-*` attributes storing extra info accessed via `dataset`.
42. **What is the `<template>` element?** — Holds inert markup cloned/instantiated by JS.
43. **What is the `<datalist>` element?** — Provides autocomplete suggestions for an input.
44. **What is form validation in HTML5?** — Built-in constraints (`required`, `pattern`, `min`, `type`) validated by the browser.
45. **What is the `pattern` attribute?** — A regex an input's value must match.
46. **What is the `novalidate` attribute?** — Disables native form validation on submit.
47. **What is the difference between GET and POST forms?** — GET appends data to the URL (bookmarkable); POST sends it in the body (larger/sensitive data).
48. **What is `contenteditable`?** — Makes an element's content editable by the user.
49. **What is the `draggable` attribute?** — Enables native drag-and-drop for an element.
50. **What is Web Storage?** — `localStorage` and `sessionStorage` for key-value client storage.
51. **localStorage vs sessionStorage?** — localStorage persists across sessions; sessionStorage clears when the tab closes.
52. **localStorage vs cookies?** — localStorage holds more data and isn't sent with every request; cookies are smaller and server-accessible.
53. **What is the Geolocation API?** — Lets a page request the user's location with permission.
54. **What is the History API?** — `pushState`/`replaceState` for SPA navigation without full reloads.
55. **What are Web Workers?** — Background threads running scripts without blocking the UI.
56. **What is the `<picture>` element?** — Provides multiple image sources for responsive/art-directed images.
57. **What is `srcset`?** — An attribute offering image variants for different resolutions/sizes.
58. **What is lazy loading images?** — `loading="lazy"` defers offscreen image loading.
59. **What is the difference between `<b>`/`<strong>` and `<i>`/`<em>`?** — `<strong>`/`<em>` carry semantic importance/emphasis; `<b>`/`<i>` are purely visual.
60. **What is ARIA?** — Accessible Rich Internet Applications attributes improving accessibility for assistive tech.
61. **What is the `role` attribute?** — Defines an element's semantic role for assistive technologies.
62. **What is `tabindex`?** — Controls keyboard focus order and focusability.
63. **What is the `<iframe>` element?** — Embeds another document within the page.
64. **What are iframe security attributes?** — `sandbox` and `allow` restrict embedded content capabilities.
65. **What is the `defer` attribute on scripts?** — Loads the script in parallel and executes after HTML parsing, in order.
66. **What is the `async` attribute on scripts?** — Loads in parallel and executes as soon as ready, without order guarantees.
67. **defer vs async?** — Both download async; `defer` preserves order and waits for parsing, `async` runs immediately when ready.
68. **Where should scripts be placed?** — Before `</body>` or with `defer` to avoid blocking rendering.
69. **What is character encoding?** — `<meta charset="UTF-8">` defines how bytes map to characters.
70. **What is the DOM?** — The Document Object Model, a tree representation of the page manipulable via JS.
71. **What is the difference between `<script>` in head vs body?** — Head blocks parsing unless deferred/async; body-end runs after content loads.
72. **What is progressive enhancement?** — Building a baseline experience that works everywhere, then layering enhancements.
73. **What is graceful degradation?** — Building for modern browsers while ensuring basic function on older ones.
74. **What are microdata/schema.org attributes?** — Structured-data markup (`itemscope`, `itemprop`) improving search understanding.
75. **What is the difference between `<meta>` description and `<title>`?** — Title is the page name/tab label; meta description is the summary snippet.

### Hard

76. **How does the browser rendering pipeline work?** — Parse HTML→DOM, CSS→CSSOM, combine into render tree, layout, paint, composite.
77. **What is the critical rendering path?** — The sequence of steps to render initial content; optimizing it speeds first paint.
78. **How do you optimize for first contentful paint?** — Inline critical CSS, defer non-critical JS, preload key assets, and minimize render-blocking resources.
79. **What are `<link rel="preload">` and `prefetch`?** — Preload fetches critical resources early; prefetch grabs likely-needed future resources.
80. **What is `preconnect`?** — Establishes early connections (DNS/TLS) to third-party origins to reduce latency.
81. **How does the browser handle render-blocking resources?** — CSS and synchronous JS block rendering/parsing until fetched and processed.
82. **How do Web Components work?** — Custom elements, Shadow DOM, and templates create reusable encapsulated components.
83. **What is the Shadow DOM?** — An encapsulated DOM subtree with scoped styles isolated from the main document.
84. **What are custom elements?** — Author-defined HTML elements registered via `customElements.define`.
85. **How do you make an accessible modal dialog?** — Trap focus, use `role="dialog"`/`aria-modal`, manage focus return, and support Escape.
86. **What is the `<dialog>` element?** — A native modal/non-modal dialog with built-in show/close behavior.
87. **How does the browser's speculative/preload scanner help?** — It scans ahead to fetch resources while the main parser is blocked.
88. **What is Content Security Policy (CSP)?** — A header/meta policy restricting allowed sources to mitigate XSS.
89. **How do you prevent XSS in HTML?** — Escape/encode output, sanitize input, use CSP, and avoid unsafe `innerHTML`.
90. **What is the difference between reflow and repaint?** — Reflow recalculates layout (expensive); repaint redraws pixels without layout change.
91. **How do you minimize layout thrashing?** — Batch DOM reads/writes and avoid interleaving measurements with mutations.
92. **What is the difference between DOMContentLoaded and load?** — DOMContentLoaded fires when HTML is parsed; load waits for all resources.
93. **How do responsive images with `srcset`/`sizes` work?** — The browser picks the best source based on viewport and pixel density.
94. **What is art direction with `<picture>`?** — Serving different image crops/formats per condition via `<source media>`.
95. **How do modern image formats help (WebP/AVIF)?** — Better compression at similar quality, reducing bandwidth.
96. **How do Service Workers enable offline?** — They intercept requests and serve cached responses via the Cache API.
97. **What is a Progressive Web App (PWA)?** — A web app with a manifest and service worker enabling installability and offline use.
98. **What is the Web App Manifest?** — A JSON file describing name, icons, and display for installable PWAs.
99. **How do you ensure accessible forms?** — Labels, fieldsets/legends, error messaging, and ARIA where needed.
100. **What is the accessibility tree?** — A parallel structure browsers expose to assistive tech derived from the DOM/ARIA.
101. **How do landmarks aid navigation?** — Semantic regions (`banner`, `main`, `navigation`) let screen-reader users jump around.
102. **How do you handle internationalization in HTML?** — `lang` attributes, `dir` for text direction, and locale-aware formatting.
103. **What is the `dir` attribute?** — Sets text direction (`ltr`/`rtl`/`auto`).
104. **How do you defer heavy third-party scripts safely?** — Load async/deferred, use facades, and isolate in workers/iframes.
105. **What is the difference between `innerHTML`, `textContent`, and `innerText`?** — `innerHTML` parses markup; `textContent` is raw text; `innerText` reflects rendered, style-aware text.
106. **How do you prevent clickjacking?** — `X-Frame-Options` or CSP `frame-ancestors`.
107. **How does browser caching interact with HTML?** — Cache headers/ETags control revalidation; HTML is often set to revalidate.
108. **How do you optimize the DOM size?** — Reduce node count, virtualize long lists, and avoid deep nesting.
109. **What is Subresource Integrity (SRI)?** — A hash on `<script>`/`<link>` ensuring fetched resources aren't tampered with.
110. **How do you make media accessible?** — Captions (`<track>`), transcripts, and descriptive audio.
111. **How do you structure a document for SEO and accessibility together?** — Semantic landmarks, one logical heading hierarchy, meaningful links, alt text, and structured data.
