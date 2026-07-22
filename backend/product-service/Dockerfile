# Build context must be the backend/ directory (see docker-compose.yml).
# ---- build stage ----
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY product-service/pom.xml product-service/pom.xml
COPY order-service/pom.xml order-service/pom.xml
COPY api-gateway/pom.xml api-gateway/pom.xml
RUN mvn -q -pl product-service -am dependency:go-offline || true
COPY . .
RUN mvn -q -pl product-service -am clean package -DskipTests

# ---- run stage ----
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/product-service/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
