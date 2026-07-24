## 3. REST Web Services (111 questions)

### Basic

1. **What is REST?** — An architectural style using stateless HTTP operations on resources identified by URIs.
2. **What is a resource?** — Any named piece of information (e.g., a user, order) addressable by a URI.
3. **What is a URI?** — A Uniform Resource Identifier that uniquely names/locates a resource.
4. **What are the main HTTP methods?** — GET, POST, PUT, PATCH, DELETE (plus HEAD, OPTIONS).
5. **What does GET do?** — Retrieves a resource; safe and idempotent.
6. **What does POST do?** — Creates a resource or triggers processing; not idempotent.
7. **What does PUT do?** — Fully replaces/creates a resource at a known URI; idempotent.
8. **What does PATCH do?** — Applies a partial update to a resource.
9. **What does DELETE do?** — Removes a resource; idempotent.
10. **What is idempotency in HTTP?** — Repeating a request has the same effect as doing it once (GET, PUT, DELETE).
11. **What is a safe method?** — One that doesn't modify state (GET, HEAD, OPTIONS).
12. **What is statelessness in REST?** — Each request carries all info needed; the server keeps no client session state.
13. **What are HTTP status codes?** — Three-digit codes signaling result: 1xx info, 2xx success, 3xx redirect, 4xx client error, 5xx server error.
14. **What is 200 OK?** — The request succeeded.
15. **What is 201 Created?** — A resource was successfully created.
16. **What is 204 No Content?** — Success with no response body.
17. **What is 400 Bad Request?** — The request was malformed or invalid.
18. **What is 401 vs 403?** — 401 means not authenticated; 403 means authenticated but not authorized.
19. **What is 404 Not Found?** — The resource doesn't exist.
20. **What is 500 Internal Server Error?** — An unexpected server-side failure.
21. **What is JSON?** — A lightweight text data format commonly used for REST payloads.
22. **What is content negotiation?** — Client and server agree on representation format via `Accept`/`Content-Type` headers.
23. **What is the `Content-Type` header?** — Declares the media type of the request/response body.
24. **What is the `Accept` header?** — States the media types the client can handle.
25. **What are query parameters?** — Key-value pairs after `?` in a URL used for filtering, sorting, paging.
26. **What are path parameters?** — Variable segments in the URI path identifying a specific resource.
27. **What is a request header?** — Metadata sent with a request (auth, content type, etc.).
28. **What is a response body?** — The payload returned by the server, often JSON.
29. **What is CRUD mapping to HTTP?** — Create→POST, Read→GET, Update→PUT/PATCH, Delete→DELETE.
30. **What is a RESTful URL for a collection?** — A plural noun like `/users`; a single item is `/users/42`.
31. **Should URLs contain verbs?** — No; REST uses nouns for resources and HTTP methods for actions.
32. **What is an API endpoint?** — A specific URI + method combination a client can call.
33. **What is HTTPS and why use it?** — HTTP over TLS, encrypting traffic to protect confidentiality and integrity.
34. **What is an API key?** — A simple token identifying/authenticating a calling application.
35. **What is CORS?** — A browser security mechanism controlling cross-origin requests via server headers.
36. **What is a payload?** — The data carried in the request or response body.
37. **What is a media type?** — A format identifier like `application/json`.

### Medium

38. **What are the REST architectural constraints?** — Client-server, statelessness, cacheability, uniform interface, layered system, and optional code-on-demand.
39. **What is HATEOAS?** — Hypermedia as the Engine of Application State—responses include links guiding available next actions.
40. **What is the Richardson Maturity Model?** — Levels of REST maturity: 0 (RPC), 1 (resources), 2 (HTTP verbs/status), 3 (HATEOAS).
41. **PUT vs PATCH in practice?** — PUT replaces the whole resource; PATCH sends only the fields to change.
42. **Is POST ever idempotent?** — Not by default, but you can make it idempotent using idempotency keys.
43. **How do you design pagination?** — Offset/limit or cursor-based, returning page metadata and links.
44. **Offset vs cursor pagination?** — Offset is simple but drifts/slows on large data; cursor is stable and efficient for deep pages.
45. **How do you handle filtering and sorting?** — Via query params like `?status=active&sort=-createdAt`.
46. **How do you version a REST API?** — URI (`/v1`), header, or media-type versioning; keep changes backward compatible.
47. **What is the difference between 401 and 419/440?** — 401 is standard unauthorized; 419/440 are vendor-specific session-timeout codes (non-standard).
48. **When use 409 Conflict?** — When a request conflicts with current state (e.g., duplicate or version mismatch).
49. **When use 422 Unprocessable Entity?** — Syntactically valid request but semantically invalid (validation errors).
50. **When use 429 Too Many Requests?** — When the client exceeds rate limits; include `Retry-After`.
51. **What is caching in REST?** — Storing responses to reduce load, controlled via `Cache-Control`, `ETag`, and `Last-Modified`.
52. **What is an ETag?** — A validator identifying a resource version for conditional requests and optimistic concurrency.
53. **How do conditional requests work?** — `If-None-Match`/`If-Modified-Since` let the server return 304 Not Modified if unchanged.
54. **What is `Cache-Control`?** — A header specifying caching directives like `max-age`, `no-cache`, `private`.
55. **How do you secure a REST API?** — HTTPS, authentication (OAuth2/JWT), authorization, input validation, and rate limiting.
56. **What is OAuth2?** — A framework granting scoped, delegated access via tokens without sharing credentials.
57. **What is the bearer token scheme?** — `Authorization: Bearer <token>` sends an access token with each request.
58. **What is JWT structure?** — Header.Payload.Signature, base64url-encoded and signed.
59. **How do you handle errors consistently?** — Standard error body (e.g., RFC 7807 Problem Details) with code, message, and details.
60. **What is RFC 7807 Problem Details?** — A standard JSON format for HTTP API error responses.
61. **What is rate limiting and how signal it?** — Capping request rates; communicate via `429` and `X-RateLimit-*`/`Retry-After` headers.
62. **How do you document a REST API?** — OpenAPI/Swagger specs generating interactive docs.
63. **What is OpenAPI/Swagger?** — A specification and tooling for describing and documenting REST APIs.
64. **What is a DTO?** — A Data Transfer Object shaping the API payload separate from internal models.
65. **Why separate DTOs from entities?** — To decouple API contracts from persistence and avoid leaking internals.
66. **How do you handle bulk operations?** — Batch endpoints accepting arrays, or the batch/patch semantics with partial-success reporting.
67. **How do you support partial responses?** — Field selection via query params (`?fields=id,name`).
68. **What is idempotency key handling?** — Client sends a unique key; server stores/returns the original result for retries.
69. **What is a webhook?** — A server-to-server callback: your API POSTs events to a client-registered URL.
70. **How do you secure webhooks?** — Signed payloads (HMAC), timestamps, and retries with verification.
71. **REST vs SOAP?** — REST is lightweight, JSON/HTTP, flexible; SOAP is XML, contract-heavy (WSDL), with built-in standards.
72. **REST vs GraphQL?** — REST exposes fixed resource endpoints; GraphQL lets clients query exactly the fields they need from one endpoint.
73. **REST vs gRPC?** — REST/JSON is human-friendly and universal; gRPC/Protobuf is faster and strongly typed, ideal internally.
74. **How do you handle long-running operations?** — Return 202 Accepted with a status resource the client polls, or use webhooks.
75. **What is the `Location` header used for?** — To point to a newly created resource (with 201) or an async status resource (with 202).

### Hard

76. **How do you achieve true statelessness with auth?** — Use self-contained tokens (JWT) validated per request, avoiding server session storage.
77. **What are trade-offs of JWT vs opaque tokens?** — JWT is stateless but hard to revoke; opaque tokens need introspection but are easily revocable.
78. **How do you revoke JWTs?** — Short TTLs plus refresh tokens, a revocation/blacklist store, or token versioning.
79. **How do you design optimistic concurrency in REST?** — Use ETags with `If-Match`; return 412 Precondition Failed on version mismatch.
80. **How do you version without breaking clients?** — Additive changes, tolerant readers, deprecation windows, and clear compatibility policy.
81. **How do you design idempotent POST for payments?** — Require an idempotency key; persist the first outcome and replay it for duplicates.
82. **How do you handle distributed rate limiting across nodes?** — Centralized token bucket in Redis or sliding-window counters shared cluster-wide.
83. **How do you paginate consistently under concurrent writes?** — Cursor/keyset pagination on a stable sort key to avoid skips/duplicates.
84. **How do you design a REST API for high cacheability?** — Cacheable GETs, ETags, sensible `Cache-Control`, and CDN-friendly URLs.
85. **How do you prevent over-fetching/under-fetching in REST?** — Field selection, expansion params, compound documents, or offer GraphQL alongside.
86. **How do you handle partial failures in batch endpoints?** — Return 207 Multi-Status or a per-item result array with individual statuses.
87. **What is HATEOAS's practical value and cost?** — It decouples clients from URL structures but adds payload size and client complexity; adoption is limited.
88. **How do you secure against injection and mass assignment?** — Validate/whitelist inputs, bind to explicit DTO fields, and never map raw payloads to entities.
89. **How do you implement fine-grained authorization?** — Scopes/roles plus resource-level checks (ABAC/policy engines like OPA).
90. **How do you design consistent error contracts across teams?** — Shared error schema (Problem Details), error catalog, and linting in CI.
91. **How do you handle API deprecation gracefully?** — Announce, use `Deprecation`/`Sunset` headers, provide migration guides, and monitor usage.
92. **How do you throttle expensive queries fairly?** — Cost-based rate limits, query complexity scoring, and per-client quotas.
93. **How do you design idempotent DELETE semantics?** — DELETE is idempotent; return 204 whether or not the resource existed (or 404 consistently by policy).
94. **How do you secure CORS properly?** — Whitelist specific origins/methods/headers, avoid wildcard with credentials, and validate preflight.
95. **How do you handle large file uploads/downloads?** — Streaming, chunked/multipart uploads, resumable protocols, and presigned URLs.
96. **What are presigned URLs?** — Time-limited signed links letting clients upload/download directly from object storage.
97. **How do you ensure backward-compatible JSON evolution?** — Add optional fields, never repurpose/rename, and use tolerant readers.
98. **How do you implement conditional caching with validation?** — Serve ETags/Last-Modified and answer `If-None-Match`/`If-Modified-Since` with 304.
99. **How do you trace and correlate REST requests?** — Propagate a correlation/trace ID header and log it across services.
100. **How do you protect against replay attacks?** — Nonces, timestamps, signed requests, and short token lifetimes.
101. **How do you design multi-tenant REST APIs?** — Tenant scoping via token claims/subdomain/header with strict data isolation.
102. **How do you handle API composition efficiently?** — Aggregate downstream calls in parallel with timeouts and partial-result handling.
103. **How do you support async APIs with callbacks?** — 202 + status resource or webhooks with signed, retried deliveries.
104. **How do you validate and negotiate multiple media types?** — Register message converters and honor `Accept`/`Content-Type` with proper 406/415 responses.
105. **When return 406 vs 415?** — 406 when the server can't produce an acceptable representation; 415 when it can't consume the request media type.
106. **How do you enforce request size and complexity limits?** — Max body size, depth limits, pagination caps, and gateway-level guards.
107. **How do you design consistent hypermedia links?** — Standard link relations, absolute URIs, and a documented link vocabulary.
108. **How do you test REST APIs thoroughly?** — Contract tests, schema validation, negative/security tests, and load tests.
109. **How do you handle time zones and dates in APIs?** — Use ISO 8601 UTC timestamps and let clients localize.
110. **How do you design an API gateway's responsibilities vs services?** — Gateway handles cross-cutting (auth, rate limit, routing); services own business logic.
111. **How would you evolve REST toward event-driven?** — Add webhooks/SSE/streaming for push while keeping REST for request-response.
