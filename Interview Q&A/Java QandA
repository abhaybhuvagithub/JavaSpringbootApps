# The Modern Java Developer Toolkit — Deep Dive + 100 Q&A

This guide covers all 25 tools/technologies from the "Java Developer Today" stack, organized by category, followed by 100 interview-style Q&A (4 per tool).

---

## 1. Core Language & Testing

### Java SE 17
The current LTS baseline for enterprise Java. Brings records (compact immutable data carriers), sealed classes (restricted class hierarchies), pattern matching for `instanceof`, text blocks, and a much better `switch` expression syntax compared to Java 8. Performance is significantly better thanks to newer garbage collectors (ZGC, Shenandoah) and JIT improvements.

### JUnit 5
The standard testing framework, split into JUnit Platform, Jupiter (new programming model), and Vintage (backward compatibility with JUnit 3/4). Supports parameterized tests, dynamic tests, nested test classes, and extension model (`@ExtendWith`) for plugging in Mockito, Spring, Testcontainers, etc.

### Maven / Gradle
Build automation and dependency management tools. Maven uses declarative XML (`pom.xml`) with a fixed lifecycle; Gradle uses a Groovy/Kotlin DSL that's more flexible and faster via incremental builds and build caching. Both resolve dependencies from repositories like Maven Central.

---

## 2. Frameworks

### Spring Boot 3
Opinionated, auto-configuring framework built on Spring Framework 6. Requires Java 17+, uses Jakarta EE namespaces (`jakarta.*` instead of `javax.*`), and adds native-image support via GraalVM plus built-in observability (Micrometer). Embeds a server (Tomcat/Netty) so apps run standalone.

### Hibernate 6
The dominant JPA (Jakarta Persistence API) implementation — an ORM that maps Java objects to relational database tables. Version 6 introduced a new SQL rendering engine, better type-safety, and improved support for modern SQL features across databases.

### Micronaut
A lightweight, cloud-native JVM framework designed to compete with Spring Boot on startup time and memory footprint. It does dependency injection and AOP at compile time (not reflection at runtime), making it ideal for serverless and microservices.

### Quarkus
Red Hat's "Kubernetes-native Java" framework, optimized for GraalVM native compilation — sub-second startup and tiny memory usage. Popular for containers and serverless functions where cold-start time matters.

---

## 3. Containers & Orchestration

### Docker
Packages an application plus its dependencies into a portable "container" image that runs identically anywhere. Java apps are typically containerized with a `Dockerfile` using multi-stage builds (build stage + slim JRE runtime stage).

### Kubernetes
The industry-standard container orchestration platform. Manages deployment, scaling, self-healing, and networking of containerized apps across clusters. Java developers interact with it via YAML manifests (Deployments, Services, ConfigMaps) or Helm charts.

### Jenkins
A long-standing open-source automation server for CI/CD pipelines — compiling, testing, and deploying code automatically on every commit, typically defined via a `Jenkinsfile` (Groovy-based pipeline-as-code).

---

## 4. Messaging & Streaming

### Apache Kafka
A distributed event-streaming platform used for high-throughput, durable, publish-subscribe messaging between microservices — common for event sourcing, log aggregation, and real-time data pipelines.

### RabbitMQ
A traditional message broker implementing AMQP, good for complex routing (exchanges, queues, bindings) and task-queue-style workloads where lower throughput but flexible routing is preferred over Kafka's log-based model.

---

## 5. Data Stores

### Redis
An in-memory key-value store used for caching, session storage, rate limiting, and pub/sub messaging. Extremely fast because data lives in RAM, with optional persistence to disk.

### PostgreSQL
A powerful open-source relational database known for standards compliance, advanced features (JSONB, window functions, full-text search), and strong consistency guarantees — a common default choice for new Java services.

### MySQL
Another widely used open-source RDBMS, historically popular with web applications (the "M" in the old LAMP stack), known for simplicity and broad hosting support.

---

## 6. API & Auth

### GraphQL
A query language for APIs that lets clients request exactly the fields they need in a single request, avoiding the over-fetching/under-fetching problems common with REST. Java support comes via libraries like `graphql-java` or Spring for GraphQL.

### Swagger / OpenAPI
OpenAPI is the specification format for describing REST APIs (endpoints, parameters, responses); Swagger is the toolset (Swagger UI, Codegen) built around that spec. `springdoc-openapi` auto-generates docs from Spring controllers.

### Keycloak (OAuth/OIDC)
An open-source identity and access management server implementing OAuth 2.0 and OpenID Connect. Handles login, single sign-on, token issuance, and role-based access control so applications don't build auth from scratch.

---

## 7. Observability

### Splunk / ELK Stack
Log aggregation and analysis platforms. ELK = Elasticsearch (storage/search), Logstash (ingestion/processing), Kibana (visualization). Splunk is a commercial alternative offering similar log search and dashboarding at enterprise scale.

### Prometheus / Grafana
Prometheus scrapes and stores time-series metrics (CPU, request latency, error rates) from applications, typically exposed via Micrometer in Spring Boot. Grafana visualizes those metrics in dashboards and supports alerting.

---

## 8. Version Control & IDE

### GitHub
The dominant Git hosting platform, adding pull requests, code review, GitHub Actions (CI/CD), issue tracking, and package registries on top of the Git version control system.

### VS Code / IntelliJ IDEA
IntelliJ IDEA is the most feature-rich Java IDE (deep refactoring, debugging, Spring/Hibernate integration). VS Code is a lightweight, extensible editor that with the Java extension pack becomes a capable, faster-starting alternative.

---

## 9. Cloud & Infrastructure

### AWS / Azure
The two leading cloud platforms offering compute (EC2/Azure VMs), managed Kubernetes (EKS/AKS), managed databases (RDS/Azure SQL), serverless (Lambda/Functions), and countless other managed services Java apps deploy to.

### GCP
Google Cloud Platform — third major cloud provider, notable for Kubernetes origins (GKE), BigQuery for analytics, and strong data/ML tooling; also runs Java workloads via Cloud Run and App Engine.

### Terraform
An Infrastructure-as-Code tool using declarative HCL config to provision and manage cloud resources (servers, databases, networks) across AWS, Azure, GCP, and more, with state tracking so changes are predictable and repeatable.

---

# 100 Q&A

## Java SE 17
1. **Q: What is a record in Java?** A: An immutable data class with auto-generated constructor, getters, `equals()`, `hashCode()`, and `toString()`.
2. **Q: What are sealed classes for?** A: Restricting which classes/interfaces can extend or implement a given type, enabling exhaustive pattern matching.
3. **Q: What's new in `switch` expressions?** A: Arrow syntax (`->`), multiple labels per case, and the ability to return a value directly.
4. **Q: Why upgrade from Java 8 to 17?** A: Better performance (modern GCs), security patches, LTS support, and modern language features that reduce boilerplate.

## Spring Boot 3
5. **Q: What's the minimum Java version for Spring Boot 3?** A: Java 17.
6. **Q: What changed with `javax` vs `jakarta`?** A: Spring Boot 3 moved to the Jakarta EE 9+ namespace, so all `javax.*` imports become `jakarta.*`.
7. **Q: What is auto-configuration?** A: Spring Boot inspects the classpath and configures beans automatically based on what's present, reducing manual XML/Java config.
8. **Q: How does Spring Boot support native images?** A: Through GraalVM AOT compilation support built into Spring Framework 6.

## Hibernate 6
9. **Q: What problem does Hibernate solve?** A: The "impedance mismatch" between object-oriented code and relational databases (ORM).
10. **Q: What's the difference between JPA and Hibernate?** A: JPA is a specification; Hibernate is a concrete implementation of it.
11. **Q: What is lazy loading?** A: Related entities are fetched from the DB only when accessed, not eagerly with the parent.
12. **Q: What's a common Hibernate pitfall?** A: The N+1 select problem, where a query triggers many additional queries for related entities.

## JUnit 5
13. **Q: What are the three JUnit 5 modules?** A: Platform, Jupiter, Vintage.
14. **Q: What annotation defines a test method?** A: `@Test`.
15. **Q: How do you run parameterized tests?** A: With `@ParameterizedTest` plus a source annotation like `@ValueSource` or `@CsvSource`.
16. **Q: What's the purpose of `@ExtendWith`?** A: To register extensions (e.g., Mockito, Spring TestContext) into the test lifecycle.

## Maven / Gradle
17. **Q: What file defines a Maven project?** A: `pom.xml`.
18. **Q: Why might a team choose Gradle over Maven?** A: Faster incremental builds, build caching, and a more flexible DSL.
19. **Q: What is a Maven "lifecycle phase"?** A: A fixed step in the build process (e.g., compile, test, package, install, deploy).
20. **Q: What is dependency scope?** A: A setting controlling when a dependency is available (compile, test, runtime, provided).

## Micronaut
21. **Q: What makes Micronaut fast to start?** A: Compile-time dependency injection instead of runtime reflection.
22. **Q: What is Micronaut best suited for?** A: Microservices and serverless functions needing low memory and fast startup.
23. **Q: Does Micronaut support Spring-style annotations?** A: It has its own annotation model but offers a Spring compatibility layer.
24. **Q: How does Micronaut compare to Quarkus?** A: Both target cloud-native/GraalVM use cases; Micronaut is framework-agnostic while Quarkus is closely tied to the Red Hat/Kubernetes ecosystem.

## Quarkus
25. **Q: What is Quarkus optimized for?** A: Fast startup and low memory via GraalVM native compilation.
26. **Q: What's Quarkus's tagline concept?** A: "Kubernetes-native Java" / "supersonic subatomic Java."
27. **Q: What build tool does Quarkus commonly use?** A: Maven or Gradle, same as standard Java projects.
28. **Q: When would native compilation not be worth it?** A: When build time and complexity outweigh startup-time savings (e.g., long-running non-serverless apps).

## Docker
29. **Q: What is a Docker image vs a container?** A: An image is the immutable blueprint; a container is a running instance of that image.
30. **Q: What's a multi-stage Dockerfile used for in Java?** A: Building the app in one stage (with JDK/Maven) and copying only the compiled artifact into a slim JRE runtime stage.
31. **Q: What command builds a Docker image?** A: `docker build -t name:tag .`
32. **Q: Why keep container images small?** A: Faster pulls/deploys, smaller attack surface, lower storage costs.

## Kubernetes
33. **Q: What is a Kubernetes Pod?** A: The smallest deployable unit, wrapping one or more containers that share networking/storage.
34. **Q: What does a Deployment manage?** A: Desired state and rolling updates for a set of replica Pods.
35. **Q: What's a Service in Kubernetes?** A: A stable network endpoint that load-balances traffic to a set of Pods.
36. **Q: What is a ConfigMap used for?** A: Injecting non-secret configuration data into Pods without rebuilding images.

## Jenkins
37. **Q: What is a Jenkinsfile?** A: A Groovy-based script defining a CI/CD pipeline as code.
38. **Q: What's the difference between declarative and scripted pipelines?** A: Declarative uses a structured, simpler syntax; scripted offers full Groovy flexibility.
39. **Q: What triggers a Jenkins build?** A: Commonly a webhook from Git on push, a schedule (cron), or manual trigger.
40. **Q: What's a Jenkins agent?** A: A worker node that executes pipeline steps.

## Apache Kafka
41. **Q: What is a Kafka topic?** A: A named, partitioned log that producers write to and consumers read from.
42. **Q: What is a consumer group?** A: A set of consumers sharing the work of reading a topic's partitions.
43. **Q: How does Kafka achieve durability?** A: Messages are persisted to disk and replicated across brokers.
44. **Q: When is Kafka preferred over RabbitMQ?** A: For high-throughput event streaming, replayability, and log-based processing.

## RabbitMQ
45. **Q: What protocol does RabbitMQ implement?** A: AMQP (Advanced Message Queuing Protocol).
46. **Q: What is an exchange in RabbitMQ?** A: A routing component that directs messages to queues based on bindings/rules.
47. **Q: What are common exchange types?** A: Direct, topic, fanout, headers.
48. **Q: When is RabbitMQ a better fit than Kafka?** A: Complex routing needs and traditional task-queue workloads with lower throughput.

## Redis
49. **Q: What data structures does Redis support?** A: Strings, hashes, lists, sets, sorted sets, streams, and more.
50. **Q: What's a common Java use case for Redis?** A: Caching frequently-read data (e.g., via Spring Cache) to reduce database load.
51. **Q: Is Redis persistent?** A: Optionally — via RDB snapshots and/or AOF (append-only file) logging.
52. **Q: What is Redis pub/sub?** A: A messaging pattern for broadcasting messages to subscribed clients in real time.

## PostgreSQL
53. **Q: What is JSONB in Postgres?** A: A binary, indexable JSON column type for semi-structured data.
54. **Q: What isolation levels does Postgres support?** A: Read Committed (default), Repeatable Read, and Serializable.
55. **Q: What's a common Java driver for Postgres?** A: The `pgjdbc` (PostgreSQL JDBC) driver.
56. **Q: Why do teams favor Postgres for new services?** A: Standards compliance, rich feature set, and strong open-source ecosystem.

## MySQL
57. **Q: What storage engine is most common in modern MySQL?** A: InnoDB.
58. **Q: What historical stack popularized MySQL?** A: LAMP (Linux, Apache, MySQL, PHP).
59. **Q: How does MySQL replication typically work?** A: Via binary log shipping from a primary to one or more replicas.
60. **Q: What's a common Java connector for MySQL?** A: Connector/J (MySQL JDBC driver).

## GraphQL
61. **Q: What problem does GraphQL solve vs REST?** A: Over-fetching and under-fetching by letting clients specify exact fields needed.
62. **Q: What are the three GraphQL operation types?** A: Query, Mutation, Subscription.
63. **Q: What Java library implements GraphQL?** A: `graphql-java`, often used via Spring for GraphQL.
64. **Q: What's a GraphQL schema?** A: A strongly-typed contract defining available types, queries, and mutations.

## Swagger / OpenAPI
65. **Q: What's the difference between OpenAPI and Swagger?** A: OpenAPI is the specification; Swagger is the tooling built around it.
66. **Q: What does Swagger UI provide?** A: An interactive web page to explore and test API endpoints from the spec.
67. **Q: How is OpenAPI docs generated in Spring Boot?** A: Typically via the `springdoc-openapi` library scanning controllers/annotations.
68. **Q: What format is an OpenAPI spec written in?** A: YAML or JSON.

## Keycloak (OAuth/OIDC)
69. **Q: What is OAuth 2.0 for?** A: Authorization — granting limited access to resources without sharing credentials.
70. **Q: What does OIDC add on top of OAuth 2.0?** A: An authentication/identity layer (ID tokens, user info).
71. **Q: What is Keycloak's role in an architecture?** A: A centralized identity provider handling login, SSO, and token issuance for multiple apps.
72. **Q: What's a JWT?** A: A JSON Web Token — a signed, compact token format commonly used to carry auth claims.

## Splunk / ELK Stack
73. **Q: What does the "E" in ELK stand for?** A: Elasticsearch.
74. **Q: What role does Logstash play?** A: Ingesting, parsing, and transforming log data before storage.
75. **Q: What is Kibana used for?** A: Visualizing and searching data stored in Elasticsearch.
76. **Q: How does Splunk differ from ELK?** A: Splunk is a commercial, all-in-one product; ELK is open-source and modular (though Elastic also sells a managed offering).

## Prometheus / Grafana
77. **Q: How does Prometheus collect metrics?** A: By scraping HTTP endpoints exposed by instrumented applications at regular intervals.
78. **Q: What Java library commonly exposes metrics for Prometheus?** A: Micrometer (built into Spring Boot Actuator).
79. **Q: What is Grafana used for?** A: Building dashboards and alerts on top of metrics from Prometheus and other data sources.
80. **Q: What query language does Prometheus use?** A: PromQL.

## GitHub
81. **Q: What is a pull request?** A: A proposed set of changes submitted for review before merging into a branch.
82. **Q: What is GitHub Actions?** A: GitHub's built-in CI/CD automation triggered by repository events.
83. **Q: What's the difference between Git and GitHub?** A: Git is the distributed version control system; GitHub is a hosting platform built around it.
84. **Q: What is a GitHub Actions workflow file?** A: A YAML file in `.github/workflows/` defining automated jobs and steps.

## VS Code / IntelliJ IDEA
85. **Q: What's IntelliJ IDEA known for among Java devs?** A: Deep code intelligence, refactoring tools, and native Spring/Hibernate support.
86. **Q: How does VS Code support Java?** A: Via the Java Extension Pack (language server, debugger, Maven/Gradle support).
87. **Q: What's a key trade-off between the two?** A: IntelliJ offers deeper Java-specific tooling; VS Code is lighter-weight and more flexible for polyglot projects.
88. **Q: What is a "Community" vs "Ultimate" IntelliJ edition?** A: Community is free/open-source with core Java support; Ultimate is paid and adds enterprise framework support (Spring, JPA, etc.).

## AWS / Azure
89. **Q: What is EC2?** A: AWS's virtual machine (compute instance) service.
90. **Q: What is EKS/AKS?** A: Managed Kubernetes services on AWS and Azure respectively.
91. **Q: What is AWS Lambda used for?** A: Running serverless functions triggered by events, without managing servers.
92. **Q: What is RDS?** A: AWS's managed relational database service (supports Postgres, MySQL, etc.).

## GCP
93. **Q: What is GKE?** A: Google Kubernetes Engine — Google's managed Kubernetes service.
94. **Q: What is Cloud Run?** A: A serverless platform for running containerized applications, scaling to zero.
95. **Q: What is BigQuery used for?** A: Large-scale, serverless data analytics and warehousing.
96. **Q: Why is GCP notable for Kubernetes?** A: Kubernetes originated from Google's internal Borg system.

## Terraform
97. **Q: What language does Terraform use?** A: HCL (HashiCorp Configuration Language).
98. **Q: What is Terraform state?** A: A file tracking the current real-world resources Terraform manages, used to compute changes.
99. **Q: What does `terraform plan` do?** A: Shows what changes would be made without applying them.
100. **Q: Why use Terraform instead of manual cloud console changes?** A: Reproducibility, version control, and consistent, auditable infrastructure across environments.

---

*File saved for reference — feel free to ask for a deep dive on any single tool.*
