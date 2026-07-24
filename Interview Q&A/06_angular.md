## 6. Angular (111 questions)

### Basic

1. **What is Angular?** — A TypeScript-based front-end framework for building single-page applications with a full toolset.
2. **AngularJS vs Angular?** — AngularJS (1.x) uses JS and scopes; Angular (2+) is a rewrite in TypeScript with components and better performance.
3. **What is a component?** — A building block combining a template, class, and styles to control a view.
4. **What is a module (NgModule)?** — A container grouping related components, directives, pipes, and services.
5. **What is a template?** — The HTML defining a component's view, with Angular binding syntax.
6. **What is data binding?** — Syncing data between the component class and the template.
7. **What is interpolation?** — Displaying component data in the template with `{{ expression }}`.
8. **What is property binding?** — Binding a DOM property to a component value using `[property]`.
9. **What is event binding?** — Responding to DOM events using `(event)="handler()"`.
10. **What is two-way binding?** — Combining property and event binding via `[(ngModel)]`.
11. **What is a directive?** — A class that adds behavior or modifies DOM elements.
12. **What are structural directives?** — Directives that change layout by adding/removing elements (`*ngIf`, `*ngFor`).
13. **What are attribute directives?** — Directives changing appearance/behavior of an element (`ngClass`, `ngStyle`).
14. **What is `*ngIf`?** — Conditionally includes an element based on a boolean expression.
15. **What is `*ngFor`?** — Repeats an element for each item in a collection.
16. **What is a pipe?** — A template transformer formatting displayed values (`date`, `currency`, `uppercase`).
17. **What is a service?** — A reusable class holding logic/data, injected where needed.
18. **What is dependency injection in Angular?** — The framework provides class dependencies via constructor injection.
19. **What is a component selector?** — The custom tag name used to place a component in templates.
20. **What is the Angular CLI?** — A command-line tool to scaffold, build, test, and serve Angular apps.
21. **What is `ng serve`?** — Builds and runs the app locally with live reload.
22. **What is `ng generate`?** — Scaffolds components, services, modules, etc.
23. **What is the root module?** — `AppModule`, the entry NgModule bootstrapping the app.
24. **What is the root component?** — `AppComponent`, the top-level component rendered first.
25. **What is TypeScript?** — A typed superset of JavaScript that Angular is built with.
26. **What is a decorator?** — Metadata annotation like `@Component`, `@Injectable`, `@Input`.
27. **What is `@Input`?** — Marks a property that receives data from a parent component.
28. **What is `@Output`?** — Exposes an `EventEmitter` to send events to a parent.
29. **What is `EventEmitter`?** — A class used with `@Output` to emit custom events.
30. **What is `ngModel`?** — A directive enabling two-way binding on form controls.
31. **What is the `async` pipe?** — Subscribes to an Observable/Promise in the template and auto-unsubscribes.
32. **What is a template reference variable?** — A `#var` referencing a DOM element or directive in the template.
33. **What is `ngClass`?** — Conditionally applies CSS classes.
34. **What is `ngStyle`?** — Conditionally applies inline styles.
35. **What is routing in Angular?** — Mapping URLs to components via the `RouterModule`.
36. **What is a router-outlet?** — A placeholder where routed components render.
37. **What is a standalone component?** — A modern component that works without an NgModule.

### Medium

38. **What is the component lifecycle?** — Hooks like `ngOnInit`, `ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, `ngOnDestroy`.
39. **What is `ngOnInit` vs constructor?** — Constructor sets up DI; `ngOnInit` runs initialization after inputs are set.
40. **What is `ngOnChanges`?** — Runs when input-bound properties change, receiving previous/current values.
41. **What is `ngOnDestroy`?** — Cleanup hook to unsubscribe and release resources before destruction.
42. **What is change detection?** — Angular's process of syncing the model with the view.
43. **What triggers change detection?** — Events, XHR, and timers via Zone.js patching async APIs.
44. **What is `ChangeDetectionStrategy.OnPush`?** — Checks a component only when inputs change by reference or events fire, improving performance.
45. **What is Zone.js?** — A library patching async operations so Angular knows when to run change detection.
46. **What are Observables?** — Lazy, cancelable streams of values from RxJS used throughout Angular.
47. **Observable vs Promise?** — Observables are lazy, multi-value, and cancelable; Promises are eager, single-value.
48. **What is RxJS?** — A reactive library for composing async streams with operators.
49. **What are common RxJS operators?** — `map`, `filter`, `switchMap`, `mergeMap`, `debounceTime`, `takeUntil`.
50. **What is `switchMap` vs `mergeMap`?** — `switchMap` cancels prior inner observables; `mergeMap` runs them concurrently.
51. **How do you avoid subscription leaks?** — Use `async` pipe, `takeUntil`, or `takeUntilDestroyed`.
52. **What is `HttpClient`?** — Angular's service for making HTTP requests returning Observables.
53. **What is an HTTP interceptor?** — A middleware modifying outgoing requests/incoming responses (auth, logging, errors).
54. **What is a route guard?** — A service controlling navigation (`CanActivate`, `CanDeactivate`, resolvers).
55. **What is a resolver?** — Pre-fetches data before a route activates.
56. **What is lazy loading?** — Loading feature modules on demand to reduce initial bundle size.
57. **What is a feature module?** — A module encapsulating a related set of functionality.
58. **What is a shared module?** — A module exporting common components/pipes/directives for reuse.
59. **Template-driven vs reactive forms?** — Template-driven uses directives in HTML; reactive forms define the model in code with more control.
60. **What is `FormGroup`/`FormControl`?** — Reactive form building blocks representing forms and individual controls.
61. **What is `FormBuilder`?** — A helper for concisely creating reactive form structures.
62. **How do you validate forms?** — Built-in validators (`required`, `minLength`) or custom validator functions.
63. **What is a custom validator?** — A function returning validation errors or null for a control.
64. **What is content projection?** — Inserting external content into a component via `<ng-content>`.
65. **What is `ViewChild`/`ContentChild`?** — Query decorators to access child elements/components in the view or projected content.
66. **What is a provider?** — A recipe telling the injector how to create a dependency.
67. **What are injector hierarchies?** — Angular resolves dependencies through a tree of injectors from element to root.
68. **What is `providedIn: 'root'`?** — Registers a service as a tree-shakable app-wide singleton.
69. **What is a singleton service?** — One shared instance provided at the root injector.
70. **What is `trackBy` in `*ngFor`?** — A function giving items stable identity to avoid re-rendering unchanged items.
71. **What is `ng build --prod`/production build?** — An optimized, minified, AOT-compiled build for deployment.
72. **What is AOT compilation?** — Ahead-of-Time compiling templates at build time for faster, safer runtime.
73. **AOT vs JIT?** — AOT compiles at build time (smaller/faster); JIT compiles in the browser at runtime.
74. **What is a Subject?** — An RxJS object that is both an Observable and an Observer, used for multicasting.
75. **BehaviorSubject vs Subject?** — BehaviorSubject holds/emits the current value to new subscribers; Subject emits only future values.

### Hard

76. **How does Angular change detection traverse the tree?** — It checks components top-down each cycle; OnPush prunes unchanged branches.
77. **How do you optimize change detection?** — OnPush, immutable data, `trackBy`, detaching detectors, and running work outside Angular.
78. **What is `NgZone.runOutsideAngular`?** — Runs code without triggering change detection, then re-enters when needed.
79. **How do you handle thousands of DOM nodes performantly?** — Virtual scrolling (CDK), OnPush, and `trackBy`.
80. **What is the Angular CDK?** — The Component Dev Kit providing primitives like overlays, virtual scroll, and a11y utilities.
81. **How does Ivy improve Angular?** — The Ivy renderer enables smaller bundles, better tree-shaking, and faster compilation.
82. **What is tree-shaking and how does Angular enable it?** — Removing unused code; `providedIn` and Ivy make services/components tree-shakable.
83. **How do you prevent memory leaks with RxJS at scale?** — Consistent teardown via `takeUntilDestroyed`, `async` pipe, and avoiding manual nested subscriptions.
84. **How does `switchMap` prevent race conditions in search?** — It cancels the previous request when a new query arrives, keeping only the latest.
85. **How do you share a single HTTP result among subscribers?** — Use `shareReplay` to multicast and cache the response.
86. **What are the pitfalls of `shareReplay`?** — Without proper config it can keep subscriptions/memory alive; use `refCount`/`resetOnRefCountZero`.
87. **How do you implement a custom structural directive?** — Use `TemplateRef` and `ViewContainerRef` to add/remove views programmatically.
88. **How does hierarchical DI resolve conflicting providers?** — The nearest injector wins; child providers override parent ones for that subtree.
89. **What are multi providers?** — Multiple providers for one token collected into an array (e.g., interceptors).
90. **How do you dynamically create components?** — `ViewContainerRef.createComponent` (or the deprecated `ComponentFactoryResolver`).
91. **How do you implement route-level code splitting?** — `loadChildren`/`loadComponent` with dynamic imports.
92. **How do you preload lazy modules?** — Router `PreloadAllModules` or a custom preloading strategy.
93. **How do you server-side render Angular?** — Angular Universal renders on the server for faster first paint and SEO.
94. **How does hydration work in Angular?** — Non-destructive hydration reuses server-rendered DOM instead of re-rendering.
95. **How do you handle global error handling?** — Provide a custom `ErrorHandler` and HTTP interceptors.
96. **How do you test components with async data?** — `fakeAsync`/`tick` or `waitForAsync` with `TestBed` and mocked services.
97. **What is `TestBed`?** — Angular's testing utility to configure and create a testing module/environment.
98. **How do you test an Observable-based service?** — Marble testing or subscribing and asserting emitted values with mocked `HttpTestingController`.
99. **How do you implement OnPush with observable inputs?** — Use the `async` pipe so change detection fires on emissions.
100. **How does Angular handle forms at scale?** — Reactive forms with typed controls, dynamic form arrays, and modular validators.
101. **What are typed reactive forms?** — Strongly typed `FormGroup`/`FormControl` (Angular 14+) improving safety.
102. **How do you build a reusable form control?** — Implement `ControlValueAccessor` to integrate a custom component with forms.
103. **What is `ControlValueAccessor`?** — An interface bridging a custom component to Angular's form API.
104. **How do you optimize bundle size?** — Lazy loading, tree-shaking, source-map analysis, and removing unused dependencies.
105. **How do you handle state management in Angular?** — Services with RxJS subjects, NgRx, or component store patterns.
106. **What is NgRx?** — A Redux-inspired reactive state library using actions, reducers, selectors, and effects.
107. **What are NgRx effects?** — Services handling side effects (like HTTP) triggered by actions.
108. **How do you migrate NgModules to standalone?** — Incrementally convert components to standalone and use `bootstrapApplication`.
109. **How do you implement internationalization (i18n)?** — Angular's built-in i18n with message extraction or libraries like ngx-translate.
110. **How do you secure an Angular app?** — Sanitization (built-in), auth guards, interceptors for tokens, and avoiding `bypassSecurityTrust` misuse.
111. **How does Angular prevent XSS by default?** — It sanitizes interpolated/bound values and treats them as untrusted unless explicitly trusted.
