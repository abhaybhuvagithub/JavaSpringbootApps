## 5. React JS (111 questions)

### Basic

1. **What is React?** — A JavaScript library for building component-based user interfaces with a virtual DOM.
2. **What is a component?** — A reusable, self-contained piece of UI, defined as a function or class.
3. **What is JSX?** — A syntax extension letting you write HTML-like markup in JavaScript.
4. **Function vs class components?** — Function components use hooks; class components use lifecycle methods and `this.state`.
5. **What are props?** — Read-only inputs passed from parent to child components.
6. **What is state?** — Component-local, mutable data that triggers re-render when changed.
7. **What is `useState`?** — A hook returning a state value and a setter function.
8. **What is the virtual DOM?** — An in-memory representation React diffs against to update the real DOM efficiently.
9. **What is reconciliation?** — React's process of diffing virtual DOM trees to compute minimal DOM updates.
10. **What is a key prop?** — A stable identifier for list items helping React track changes.
11. **Why are keys important?** — They enable correct, efficient reordering and prevent state bugs in lists.
12. **What is one-way data flow?** — Data flows parent-to-child via props; children notify parents via callbacks.
13. **How do you handle events in React?** — Pass handler functions to camelCase props like `onClick`.
14. **What is conditional rendering?** — Rendering different UI based on conditions using `&&`, ternaries, or early returns.
15. **How do you render lists?** — Map an array to elements, providing a unique `key`.
16. **What is `props.children`?** — The content nested between a component's opening and closing tags.
17. **What is a controlled component?** — A form input whose value is driven by React state.
18. **What is an uncontrolled component?** — A form input managing its own state, accessed via a ref.
19. **What is `useEffect`?** — A hook for running side effects after render (data fetching, subscriptions).
20. **What is the dependency array in `useEffect`?** — A list controlling when the effect re-runs.
21. **What is a fragment?** — `<></>` groups children without adding an extra DOM node.
22. **What is `create-react-app`?** — A tool that scaffolds a React project with sensible defaults (now largely superseded by Vite/frameworks).
23. **What is a hook?** — A function letting function components use state and other React features.
24. **What are the rules of hooks?** — Call hooks only at the top level and only from React functions.
25. **What is default export vs named export?** — Default exports one value per module; named exports multiple by name.
26. **How do you pass data to a parent?** — Via a callback prop the child invokes.
27. **What is lifting state up?** — Moving shared state to the closest common ancestor.
28. **What is `className` vs `class`?** — React uses `className` because `class` is a reserved JS word.
29. **What is inline styling in React?** — Passing a style object with camelCased CSS properties.
30. **What is `React.StrictMode`?** — A dev-only wrapper highlighting potential problems and double-invoking some functions.
31. **What is a synthetic event?** — React's cross-browser wrapper around native DOM events.
32. **How do you set initial state from props?** — Pass the prop as the initial argument to `useState` (used once).
33. **What is prop drilling?** — Passing props through many intermediate components that don't use them.
34. **What is a pure component?** — One that renders the same output for the same props/state.
35. **What is `key` uniqueness scope?** — Keys must be unique among siblings, not globally.
36. **How do you conditionally add a class?** — Template strings or libraries like `clsx`/`classnames`.
37. **What is the entry point of a React app?** — Typically `index.js`/`main.jsx` calling `createRoot().render()`.

### Medium

38. **What is `useContext`?** — A hook reading a Context value, avoiding prop drilling.
39. **What is the Context API?** — A way to share values (theme, auth) across the tree without passing props manually.
40. **What is `useReducer`?** — A hook managing complex state via a reducer function and dispatched actions.
41. **`useState` vs `useReducer`?** — Use reducer for complex/interdependent state or many transitions; state for simple values.
42. **What is `useMemo`?** — Memoizes an expensive computed value between renders.
43. **What is `useCallback`?** — Memoizes a function reference to avoid unnecessary child re-renders.
44. **`useMemo` vs `useCallback`?** — `useMemo` caches a value; `useCallback` caches a function (equivalent to `useMemo` returning a function).
45. **What is `useRef`?** — A hook holding a mutable value/DOM reference that persists without causing re-render.
46. **What is `React.memo`?** — A HOC that skips re-rendering when props are shallowly equal.
47. **What is a higher-order component (HOC)?** — A function taking a component and returning an enhanced component.
48. **What is a render prop?** — A prop whose value is a function returning JSX, sharing logic.
49. **What is a custom hook?** — A reusable function starting with `use` that composes other hooks.
50. **How does the `useEffect` cleanup work?** — Return a function to run before the next effect or on unmount (unsubscribe, clear timers).
51. **What causes an infinite render loop with effects?** — Updating state in an effect without proper dependencies or with an unstable dependency.
52. **What is the difference between `useEffect` and `useLayoutEffect`?** — `useLayoutEffect` runs synchronously after DOM mutation, before paint; `useEffect` runs after paint.
53. **How do you fetch data in React?** — In `useEffect` (or via libraries like React Query), handling loading/error states.
54. **Why use React Query / SWR?** — They handle caching, background refetch, dedup, and server-state sync.
55. **What is component composition?** — Building UIs by nesting/combining components rather than inheritance.
56. **What is code splitting?** — Loading parts of the bundle on demand to reduce initial load.
57. **What is `React.lazy` and `Suspense`?** — Lazy-load components and show a fallback while they load.
58. **What is a portal?** — Rendering children into a DOM node outside the parent hierarchy (modals, tooltips).
59. **What is an error boundary?** — A component catching render errors in its subtree and showing a fallback.
60. **Can hooks be error boundaries?** — Not yet; error boundaries must be class components (or use a library).
61. **What is reconciliation with keys in lists?** — Keys let React match old and new elements to preserve state and minimize DOM ops.
62. **How do you optimize re-renders?** — Memoization (`memo`, `useMemo`, `useCallback`), stable keys, and splitting components.
63. **What is derived state and its pitfall?** — State computed from props; avoid duplicating props in state to prevent desync.
64. **What is controlled vs uncontrolled trade-off?** — Controlled gives full control/validation; uncontrolled is simpler for basic forms.
65. **What is the difference between state and refs?** — State triggers re-render; refs hold mutable data without re-rendering.
66. **How do you share logic between components?** — Custom hooks (preferred), HOCs, or render props.
67. **What is batching in React?** — Grouping multiple state updates into one re-render (automatic in React 18).
68. **What is the children-as-function pattern?** — Passing a function as `children` to inject render logic.
69. **How do you handle forms with many fields?** — A single state object with a generic change handler, or libraries like React Hook Form.
70. **What is memoization's cost?** — Extra memory and comparison overhead; overuse can hurt more than help.
71. **What is `key`-based remount?** — Changing a component's `key` forces React to unmount and remount it, resetting state.
72. **How does Context cause re-renders?** — All consumers re-render when the provider value changes; split contexts or memoize to limit it.
73. **What is a controlled input's value pitfall?** — Forgetting `onChange` makes the input read-only.
74. **What is lifting vs colocating state?** — Keep state as local as possible; lift only when truly shared.
75. **What is the difference between mounting and rendering?** — Mounting inserts a component the first time; rendering computes output on each update.

### Hard

76. **How does React's concurrent rendering work?** — React can interrupt, pause, and resume rendering to keep the UI responsive (React 18 concurrent features).
77. **What is `useTransition`?** — Marks state updates as non-urgent so React can keep urgent updates responsive.
78. **What is `useDeferredValue`?** — Defers re-rendering for a value to avoid blocking urgent updates.
79. **What is automatic batching in React 18?** — State updates in promises, timeouts, and native events are batched, not just React events.
80. **How does the Fiber architecture work?** — React represents work as fiber nodes enabling incremental, interruptible rendering with priorities.
81. **How does `React.memo` compare props?** — Shallow comparison by default; pass a custom comparator for deep/selective checks.
82. **Why can stale closures happen in hooks?** — A callback captures old state/props from its render; fix with refs or correct dependencies.
83. **How do you avoid unnecessary Context re-renders?** — Split contexts, memoize the value, or use selectors (e.g., `use-context-selector`).
84. **How do you implement a debounced input with hooks correctly?** — `useRef` for the timer or a `useDebounce` hook, cleaning up on unmount.
85. **How does Suspense for data fetching work?** — Components suspend while data loads; the nearest boundary shows a fallback until ready.
86. **What is server-side rendering (SSR) in React?** — Rendering components to HTML on the server for faster first paint and SEO.
87. **SSR vs SSG vs CSR?** — SSR renders per request, SSG at build time, CSR in the browser; each trades freshness vs performance.
88. **What is hydration?** — Attaching React's event listeners/state to server-rendered HTML on the client.
89. **What are React Server Components?** — Components rendered on the server that send no JS to the client, reducing bundle size.
90. **How do you prevent memory leaks with async effects?** — Abort fetches or use an `isMounted`/`AbortController` guard in cleanup.
91. **How do you profile React performance?** — React DevTools Profiler, `why-did-you-render`, and browser performance tooling.
92. **How does reconciliation decide to reuse vs recreate?** — By element type and key; different type or key remounts, same reuses and updates.
93. **How do you implement a global state without Redux?** — Context + `useReducer`, Zustand, Jotai, or Recoil.
94. **When is Redux still appropriate?** — Large apps with complex shared state, middleware needs, and time-travel debugging.
95. **How do you handle race conditions in data fetching?** — Track the latest request (ignore stale responses) or abort previous requests.
96. **How does `useEffect` dependency exhaustiveness matter?** — Missing deps cause stale values; the lint rule enforces correctness.
97. **How do you memoize a component tree effectively?** — Stable props via `useCallback`/`useMemo` and `React.memo` at boundaries.
98. **What is the difference between reconciliation and rendering commit phases?** — Render phase computes changes (interruptible); commit phase applies them to the DOM (synchronous).
99. **How do you build an accessible custom component?** — Proper ARIA roles/attributes, keyboard handling, and focus management.
100. **How do you manage focus after route changes?** — Move focus to headings/main content and announce via live regions.
101. **How do you optimize large lists?** — Windowing/virtualization (react-window/react-virtualized) to render only visible rows.
102. **How do you handle deeply nested state updates immutably?** — Spread/structured cloning or Immer for concise immutable updates.
103. **What causes tearing in concurrent React?** — Reading external mutable state inconsistently; `useSyncExternalStore` prevents it.
104. **What is `useSyncExternalStore`?** — A hook for safely subscribing to external stores in concurrent rendering.
105. **How do you test React components?** — React Testing Library for behavior-focused tests plus Jest.
106. **How do you test custom hooks?** — With `renderHook` from Testing Library and asserting returned values/effects.
107. **How do you lazy-load routes with data?** — Combine `React.lazy`/dynamic imports with route-level data loaders.
108. **How do you prevent prop drilling at scale?** — Context, composition, or a state library scoped to feature boundaries.
109. **How do you handle error recovery in error boundaries?** — Provide reset keys or a retry action to remount the failed subtree.
110. **How do you architect a large React app?** — Feature-based folders, clear data/UI separation, typed contracts, and shared component library.
111. **How do you migrate class components to hooks safely?** — Incrementally, mapping lifecycles to effects and preserving behavior with tests.
