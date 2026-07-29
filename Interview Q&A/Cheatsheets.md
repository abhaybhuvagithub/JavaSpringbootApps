# Java Developer Toolkit — Cheatsheets

Quick-reference commands, syntax, and config snippets for all 25 tools. Companion to `java-developer-toolkit-guide.md`.

---

## Java SE 17

```java
// Record
record Point(int x, int y) {}

// Sealed class
sealed interface Shape permits Circle, Square {}
record Circle(double r) implements Shape {}
record Square(double side) implements Shape {}

// Pattern matching instanceof
if (obj instanceof String s) { System.out.println(s.length()); }

// Switch expression + pattern matching
String result = switch (shape) {
    case Circle c -> "circle r=" + c.r();
    case Square s -> "square side=" + s.side();
};

// Text block
String json = """
    { "name": "abhay" }
    """;
```
CLI: `java --version` · `javac File.java` · `java File.java` (single-file run, no compile step needed).

---

## JUnit 5

```java
@Test
void addsTwoNumbers() {
    assertEquals(4, Calculator.add(2, 2));
}

@ParameterizedTest
@CsvSource({"1,1,2", "2,3,5"})
void add(int a, int b, int expected) {
    assertEquals(expected, Calculator.add(a, b));
}

@BeforeEach void setup() {}
@AfterEach void teardown() {}
@Nested class WhenLoggedIn { @Test void canAccess() {} }
```
Maven: `mvn test` · Gradle: `gradle test`

---

## Maven

```xml
<!-- pom.xml essentials -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
```
mvn clean install        # compile, test, package, install to local repo
mvn dependency:tree      # inspect dependency graph
mvn -DskipTests package  # skip tests
mvn spring-boot:run      # run Spring Boot app
```

## Gradle

```groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'org.junit.jupiter:junit-jupiter'
}
```
```
./gradlew build
./gradlew bootRun
./gradlew dependencies
./gradlew test --tests "com.example.MyTest"
```

---

## Spring Boot 3

```java
@SpringBootApplication
public class App { public static void main(String[] a){ SpringApplication.run(App.class,a);} }

@RestController
@RequestMapping("/api/users")
class UserController {
    @GetMapping("/{id}") User get(@PathVariable Long id) { ... }
    @PostMapping User create(@RequestBody User u) { ... }
}

@Service class UserService {}
@Repository interface UserRepo extends JpaRepository<User, Long> {}
@Configuration class AppConfig { @Bean MyBean myBean(){ return new MyBean(); } }
```
`application.yml`:
```yaml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/db
```
Run: `mvn spring-boot:run` · Actuator health: `GET /actuator/health`

---

## Hibernate 6 (via JPA)

```java
@Entity
class User {
    @Id @GeneratedValue Long id;
    String name;
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    List<Order> orders;
}

// Query
@Query("SELECT u FROM User u WHERE u.name = :name")
User findByName(@Param("name") String name);
```
`application.yml`: `spring.jpa.hibernate.ddl-auto: update` · `spring.jpa.show-sql: true`

---

## Micronaut

```java
@Controller("/hello")
class HelloController {
    @Get("/{name}") String hello(String name) { return "Hi " + name; }
}
```
```
mn create-app my-app          # scaffold new project
./gradlew run
./mvnw mn:run
```

## Quarkus

```java
@Path("/hello")
class GreetingResource {
    @GET String hello() { return "hello"; }
}
```
```
mvn quarkus:dev               # live-reload dev mode
mvn package -Pnative           # build native image
```

---

## Docker

```dockerfile
# multi-stage Dockerfile
FROM maven:3.9-eclipse-temurin-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
COPY --from=build /target/app.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```
```
docker build -t myapp:1.0 .
docker run -p 8080:8080 myapp:1.0
docker ps / docker logs <id> / docker exec -it <id> sh
docker compose up -d
```

---

## Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata: { name: myapp }
spec:
  replicas: 3
  selector: { matchLabels: { app: myapp } }
  template:
    metadata: { labels: { app: myapp } }
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports: [{ containerPort: 8080 }]
---
apiVersion: v1
kind: Service
metadata: { name: myapp-svc }
spec:
  selector: { app: myapp }
  ports: [{ port: 80, targetPort: 8080 }]
```
```
kubectl apply -f deployment.yaml
kubectl get pods / svc / deployments
kubectl logs <pod> -f
kubectl exec -it <pod> -- sh
kubectl scale deployment myapp --replicas=5
kubectl rollout restart deployment myapp
```

---

## Jenkins

```groovy
// Jenkinsfile (declarative)
pipeline {
    agent any
    stages {
        stage('Build') { steps { sh 'mvn clean package' } }
        stage('Test')  { steps { sh 'mvn test' } }
        stage('Deploy'){ steps { sh 'docker build -t myapp . && docker push myapp' } }
    }
}
```

---

## Apache Kafka

```java
// Producer
KafkaProducer<String,String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("topic", "key", "value"));

// Consumer
consumer.subscribe(List.of("topic"));
var records = consumer.poll(Duration.ofMillis(100));
```
```
kafka-topics.sh --create --topic mytopic --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1
kafka-console-producer.sh --topic mytopic --bootstrap-server localhost:9092
kafka-console-consumer.sh --topic mytopic --from-beginning --bootstrap-server localhost:9092
```

## RabbitMQ

```java
channel.queueDeclare("myqueue", true, false, false, null);
channel.basicPublish("", "myqueue", null, message.getBytes());
channel.basicConsume("myqueue", true, (tag, delivery) -> { ... }, tag -> {});
```
```
rabbitmqctl list_queues
rabbitmqctl add_user myuser mypass
```

---

## Redis

```
SET key value
GET key
EXPIRE key 60
LPUSH mylist a b c
HSET user:1 name "Abhay" age 30
SUBSCRIBE channel1
PUBLISH channel1 "hello"
```
Spring: `@Cacheable("users")` on a service method to cache results automatically.

---

## PostgreSQL

```sql
CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, data JSONB);
SELECT * FROM users WHERE data->>'role' = 'admin';
EXPLAIN ANALYZE SELECT * FROM users WHERE name = 'Abhay';
```
```
psql -U postgres -d mydb
\dt          -- list tables
\d users     -- describe table
```

## MySQL

```sql
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));
SHOW TABLES;
DESCRIBE users;
EXPLAIN SELECT * FROM users WHERE name = 'Abhay';
```
```
mysql -u root -p
```

---

## GraphQL

```graphql
# Schema
type User { id: ID!, name: String!, orders: [Order!]! }
type Query { user(id: ID!): User }
type Mutation { createUser(name: String!): User }

# Query
query { user(id: "1") { name orders { id total } } }
```
Spring: `@QueryMapping User user(@Argument String id) { ... }`

---

## Swagger / OpenAPI

```yaml
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema: { type: integer }
      responses:
        '200': { description: OK }
```
Spring dependency: `springdoc-openapi-starter-webmvc-ui` → auto docs at `/swagger-ui.html`

---

## Keycloak (OAuth/OIDC)

```
# Get token (password grant, for testing)
curl -X POST http://localhost:8080/realms/myrealm/protocol/openid-connect/token \
  -d "client_id=myclient" -d "grant_type=password" \
  -d "username=user" -d "password=pass"
```
Spring Security config: `spring.security.oauth2.resourceserver.jwt.issuer-uri: http://localhost:8080/realms/myrealm`

---

## Splunk / ELK Stack

```
# Logstash pipeline snippet
input { beats { port => 5044 } }
filter { grok { match => { "message" => "%{COMBINEDAPACHELOG}" } } }
output { elasticsearch { hosts => ["localhost:9200"] } }
```
Kibana Query Language example: `status:500 AND service:"user-api"`
Splunk SPL example: `index=app_logs status=500 | stats count by service`

---

## Prometheus / Grafana

```yaml
# prometheus.yml
scrape_configs:
  - job_name: 'spring-app'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8080']
```
Spring dependency: `micrometer-registry-prometheus`
PromQL example: `rate(http_server_requests_seconds_count[5m])`

---

## GitHub

```
git clone <repo>
git checkout -b feature/my-feature
git add . && git commit -m "message"
git push origin feature/my-feature
gh pr create --title "My PR" --body "description"
```
```yaml
# .github/workflows/ci.yml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with: { java-version: '17', distribution: 'temurin' }
      - run: mvn -B package
```

---

## VS Code / IntelliJ IDEA

VS Code shortcuts: `Ctrl+Shift+P` (command palette) · `F5` (debug) · `Ctrl+\`` (terminal)
IntelliJ shortcuts: `Shift+Shift` (search everywhere) · `Ctrl+Alt+L` (reformat) · `Alt+Enter` (quick fix) · `Ctrl+Shift+F10` (run)

---

## AWS

```
aws configure
aws s3 cp file.txt s3://mybucket/
aws ec2 describe-instances
eksctl create cluster --name mycluster --region us-east-1
aws lambda invoke --function-name myFunc out.json
```

## Azure

```
az login
az group create --name myRG --location eastus
az aks create --resource-group myRG --name myAKS
az webapp up --name myapp --runtime "JAVA:17-java17"
```

## GCP

```
gcloud auth login
gcloud container clusters create my-cluster
gcloud run deploy myapp --image gcr.io/project/myapp
bq query --use_legacy_sql=false 'SELECT * FROM dataset.table LIMIT 10'
```

---

## Terraform

```hcl
provider "aws" { region = "us-east-1" }

resource "aws_instance" "app" {
  ami           = "ami-12345"
  instance_type = "t3.micro"
}
```
```
terraform init
terraform plan
terraform apply
terraform destroy
terraform state list
```

---

*Pair this with `java-developer-toolkit-guide.md` for concept explanations behind each command.*
