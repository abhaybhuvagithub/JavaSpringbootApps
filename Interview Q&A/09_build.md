## 9. Build Strategy, CI/CD & DevOps (112 questions)

### Basic

1. **What is a build?** — The process of compiling source code and assets into a runnable/deployable artifact.
2. **What is a build tool?** — Software automating compilation, testing, and packaging (Maven, Gradle, npm, Webpack).
3. **What is Maven?** — A Java build/dependency tool using a declarative `pom.xml`.
4. **What is Gradle?** — A flexible JVM build tool using Groovy/Kotlin DSL with incremental builds.
5. **Maven vs Gradle?** — Maven is convention-based XML; Gradle is scriptable, faster with caching and incremental builds.
6. **What is npm?** — Node's package manager and script runner.
7. **What is a `package.json`?** — The manifest declaring a JS project's dependencies and scripts.
8. **What is a dependency?** — An external library a project needs to build/run.
9. **What is a transitive dependency?** — A dependency pulled in by one of your direct dependencies.
10. **What is semantic versioning?** — MAJOR.MINOR.PATCH signaling breaking, feature, and fix changes.
11. **What is a lock file?** — A file pinning exact dependency versions for reproducible installs.
12. **What is a build artifact?** — The output of a build (JAR, WAR, bundle, container image).
13. **What is an artifact repository?** — A store for built artifacts (Nexus, Artifactory, npm registry).
14. **What is CI?** — Continuous Integration—frequently merging and automatically building/testing code.
15. **What is CD?** — Continuous Delivery/Deployment—automatically releasing validated builds.
16. **What is a CI/CD pipeline?** — An automated sequence: build, test, and deploy on each change.
17. **What is a pipeline stage?** — A logical phase (build, test, deploy) in a pipeline.
18. **What are common CI tools?** — Jenkins, GitHub Actions, GitLab CI, CircleCI, Azure DevOps.
19. **What is Git?** — A distributed version control system tracking code changes.
20. **What is a commit?** — A recorded snapshot of changes in Git.
21. **What is a branch?** — A movable pointer enabling parallel lines of development.
22. **What is a merge?** — Combining changes from one branch into another.
23. **What is a pull/merge request?** — A proposal to merge a branch, enabling review.
24. **What is a bundler?** — A tool combining modules/assets into optimized files (Webpack, Vite, Rollup).
25. **What is Webpack?** — A JS module bundler with loaders and plugins.
26. **What is Vite?** — A fast dev server/bundler using native ESM and esbuild/Rollup.
27. **What is minification?** — Removing whitespace/renaming to shrink code.
28. **What is transpilation?** — Converting newer/other syntax to compatible JS (e.g., Babel, TypeScript).
29. **What is Babel?** — A JS transpiler converting modern syntax to broadly supported code.
30. **What is a Docker image?** — A packaged, immutable snapshot of an app and its environment.
31. **What is a Docker container?** — A running instance of an image.
32. **What is a Dockerfile?** — A script defining how to build an image.
33. **What is an environment variable?** — A configurable value passed to a process at runtime.
34. **What is a dev vs prod build?** — Dev builds favor speed/debugging; prod builds optimize and minify.
35. **What is a smoke test?** — A quick check that core functionality works after a build/deploy.
36. **What is a rollback?** — Reverting to a previous known-good version after a bad release.
37. **What is an artifact version tag?** — A label (semantic version or commit hash) identifying a build.
38. **What is `.gitignore`?** — A file listing paths Git should not track.

### Medium

39. **What is a multi-stage Docker build?** — Using multiple `FROM` stages to build in one and copy only artifacts into a slim final image.
40. **Why use multi-stage builds?** — Smaller, more secure images without build tools in the final layer.
41. **How does Docker layer caching work?** — Each instruction is a cached layer reused if unchanged; order commands from least to most volatile.
42. **How do you optimize Docker image size?** — Slim base images, multi-stage builds, combine layers, and `.dockerignore`.
43. **What is `.dockerignore`?** — Excludes files from the build context to speed builds and shrink images.
44. **What is a monorepo?** — A single repository holding multiple projects/packages.
45. **Monorepo vs polyrepo?** — Monorepo eases sharing/atomic changes; polyrepo isolates but complicates cross-repo changes.
46. **What is trunk-based development?** — Frequent small merges to a single main branch with short-lived branches.
47. **What is GitFlow?** — A branching model with develop/feature/release/hotfix branches.
48. **Trunk-based vs GitFlow?** — Trunk-based favors continuous integration/small releases; GitFlow suits scheduled releases.
49. **What is a build matrix?** — Running a pipeline across combinations (OS, versions) in parallel.
50. **What is caching in CI?** — Reusing dependencies/build outputs between runs to speed pipelines.
51. **What is an incremental build?** — Rebuilding only what changed since the last build.
52. **What are unit vs integration vs e2e tests in a pipeline?** — Unit tests functions in isolation; integration tests components together; e2e tests full user flows.
53. **What is the test pyramid?** — Many fast unit tests, fewer integration, fewest e2e for a balanced strategy.
54. **What is code coverage?** — The percentage of code exercised by tests.
55. **What is a quality gate?** — A pass/fail threshold (coverage, lint, vulnerabilities) blocking bad builds.
56. **What is static code analysis?** — Automated inspection for bugs, smells, and vulnerabilities (SonarQube, ESLint).
57. **What is linting?** — Automated style/error checking of source code.
58. **What is a code formatter?** — A tool enforcing consistent formatting (Prettier, google-java-format).
59. **What is dependency scanning?** — Checking dependencies for known vulnerabilities (Dependabot, Snyk).
60. **What is SBOM?** — A Software Bill of Materials listing all components for supply-chain transparency.
61. **What is blue-green deployment?** — Two environments; switch traffic to the new for zero-downtime and easy rollback.
62. **What is canary deployment?** — Gradually shifting traffic to a new version to limit blast radius.
63. **What is a rolling deployment?** — Replacing instances incrementally so the service stays available.
64. **What is feature flagging?** — Toggling features at runtime without redeploying.
65. **Why decouple deploy from release?** — Ship code dark and enable via flags to reduce risk and enable testing in prod.
66. **What is infrastructure as code (IaC)?** — Managing infrastructure through versioned, declarative definitions.
67. **What is Terraform?** — An IaC tool provisioning cloud resources declaratively across providers.
68. **What is idempotency in IaC?** — Applying the same config repeatedly converges to the same state.
69. **What is a container registry?** — A store for Docker images (Docker Hub, ECR, GCR).
70. **What is Kubernetes' role in deployment?** — Orchestrates containers: scheduling, scaling, self-healing, and rollouts.
71. **What is a Helm chart?** — A templated, versioned package of Kubernetes manifests.
72. **What is a secrets manager?** — A secure store for credentials (Vault, AWS Secrets Manager) injected at runtime.
73. **Why not commit secrets to Git?** — They leak permanently in history and violate security best practice.
74. **What is artifact promotion?** — Moving the same built artifact through environments (dev→staging→prod) without rebuilding.
75. **What is environment parity?** — Keeping dev/staging/prod as similar as possible to avoid surprises.

### Hard

76. **How do you design a fast, reliable CI pipeline?** — Parallelize, cache dependencies, fail fast, run the test pyramid, and keep builds hermetic.
77. **What is a hermetic/reproducible build?** — A build that produces identical output from the same inputs, independent of the environment.
78. **How do you ensure reproducible builds?** — Pin versions, lock files, fixed base images, and pinned toolchains.
79. **How do you speed up a slow monorepo build?** — Affected-only builds, remote caching, and tools like Nx/Bazel/Turborepo.
80. **What is Bazel and why use it?** — A build system with fine-grained, cacheable, reproducible, language-agnostic builds at scale.
81. **What is remote build caching?** — Sharing build outputs across machines/CI to skip redundant work.
82. **How do you secure a software supply chain?** — Pin/verify dependencies, sign artifacts, generate SBOMs, and enforce provenance (SLSA).
83. **What is artifact signing/provenance (Sigstore/SLSA)?** — Cryptographically attesting who built an artifact and how, to prevent tampering.
84. **How do you implement zero-downtime database migrations in CI/CD?** — Expand-contract migrations decoupled from code deploys, backward compatible each step.
85. **How do you roll back a deployment with schema changes?** — Ensure backward-compatible migrations so old code runs against the new schema.
86. **How do you design a canary with automated rollback?** — Route a slice of traffic, compare SLO metrics to baseline, and auto-revert on regression.
87. **How do you manage config across environments safely?** — Externalized config, secrets managers, environment overlays, and no secrets in images.
88. **How do you handle a broken build on main?** — Revert quickly, protect main with required checks, and use pre-merge CI.
89. **What are branch protection and required checks?** — Rules blocking merges until reviews/CI pass, keeping main releasable.
90. **How do you shift security left?** — Run SAST/dependency/secret scans early in the pipeline, not just before release.
91. **What is DAST vs SAST?** — SAST analyzes source statically; DAST tests the running app dynamically.
92. **How do you cache dependencies correctly in CI?** — Key caches by lock-file hash and restore/save per toolchain.
93. **How do you parallelize tests without flakiness?** — Isolate state, shard deterministically, and avoid shared resources/order dependence.
94. **How do you deal with flaky tests?** — Quarantine, detect via retries/analytics, and fix root causes (timing, shared state).
95. **How do you optimize a frontend production bundle?** — Code splitting, tree-shaking, minification, compression, and lazy loading.
96. **What is tree-shaking and its requirements?** — Dead-code elimination requiring ES modules and side-effect-free code (`sideEffects` flag).
97. **What is code splitting and why?** — Breaking bundles into chunks loaded on demand to cut initial load.
98. **How do you cache-bust static assets?** — Content-hashed filenames invalidate caches only when content changes.
99. **How do you set up long-term caching for assets?** — Hash filenames with immutable `Cache-Control` and keep the HTML revalidated.
100. **How do you implement progressive delivery?** — Combine feature flags, canaries, and metrics to release gradually and safely.
101. **How do you gate deployments on quality metrics?** — Quality gates on coverage, vulnerabilities, performance budgets, and SLOs.
102. **What is GitOps?** — Managing deployments via Git as the source of truth with automated reconciliation (Argo CD/Flux).
103. **How does GitOps enable rollback?** — Revert the Git commit and the controller reconciles the cluster back.
104. **How do you build multi-arch container images?** — Docker Buildx/QEMU to produce manifests for amd64/arm64.
105. **How do you minimize CI costs at scale?** — Cache aggressively, run only affected jobs, right-size runners, and prune redundant stages.
106. **How do you implement blue-green for databases?** — Harder than for apps—use compatible schemas, dual-writes, or replication with cutover.
107. **How do you enforce artifact immutability?** — Build once, tag by version/hash, promote the same artifact, and never rebuild per environment.
108. **How do you handle rollbacks of stateful services?** — Version data compatibility, keep backward-compatible schemas, and snapshot/restore carefully.
109. **How do you measure DORA metrics?** — Deployment frequency, lead time, change failure rate, and MTTR to gauge delivery performance.
110. **How do you design pipeline observability?** — Track build durations, flakiness, failure rates, and stage bottlenecks with dashboards.
111. **How do you secure CI/CD runners and credentials?** — Least-privilege short-lived tokens (OIDC), isolated ephemeral runners, and no long-lived secrets.
112. **How do you choose a build/deploy strategy for a given app?** — Weigh risk tolerance, downtime budget, state, rollback needs, and team maturity to pick rolling/blue-green/canary.
