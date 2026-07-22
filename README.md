# JavaSpringbootApps — E-Commerce Microservices

A full-stack e-commerce demo built with the exact stack from the TCS Java Developer walk-in:
**Core Java, Spring Boot, REST Web Services, Microservices, PostgreSQL, HTML5, CSS3, React.js, and Angular.**

Two backend microservices sit behind a Spring Cloud Gateway and persist to PostgreSQL. Two
independent frontends (React and Angular) consume the same REST API through the gateway.

## Architecture

```
                 +-----------------+      +------------------+
                 |  React (Vite)   |      |  Angular 17      |
                 |  :3000 / :5173  |      |  :4200           |
                 +--------+--------+      +--------+---------+
                          |       HTTP /api/**      |
                          +-----------+-------------+
                                      v
                          +-----------------------+
                          |   API Gateway :8080   |  (Spring Cloud Gateway)
                          +-------+-------+-------+
                    /api/products |       | /api/orders
                                  v       v
              +-----------------------+  +-----------------------+
              |  product-service :8081|  |  order-service :8082   |
              |  Spring Boot + JPA    |<-|  RestClient call to    |
              +-----------+-----------+  |  product-service       |
                          |              +-----------+-----------+
                          v                          v
                   +------------+             +------------+
                   | productdb  |             |  orderdb   |   PostgreSQL :5432
                   +------------+             +------------+
```

## Tech stack

| Layer          | Technology                                              |
|----------------|---------------------------------------------------------|
| Language       | Core Java 17                                             |
| Framework      | Spring Boot 3.2, Spring Web, Spring Data JPA            |
| Microservices  | Spring Cloud Gateway 2023.0.x, service-to-service REST |
| Database       | PostgreSQL 16 (one DB per service)                     |
| Frontend #1    | React 18 + Vite, HTML5, CSS3                           |
| Frontend #2    | Angular 17 (standalone components), HTML5, CSS3        |
| Orchestration  | Docker + Docker Compose                                |

## Project layout

```
JavaSpringbootApps/
|-- backend/
|   |-- pom.xml                 # parent (multi-module) POM
|   |-- product-service/        # product catalog microservice (:8081)
|   |-- order-service/          # order microservice (:8082) - calls product-service
|   +-- api-gateway/            # Spring Cloud Gateway (:8080)
|-- frontend-react/             # React + Vite storefront
|-- frontend-angular/           # Angular storefront
|-- infra/                      # Postgres multi-db init script
+-- docker-compose.yml          # runs everything
```

## Run everything with Docker (recommended)

```bash
docker compose up --build
```

Then open:

- React storefront -> http://localhost:3000
- Angular storefront -> http://localhost:4200
- API gateway -> http://localhost:8080/api/products

The product catalog is auto-seeded on first start.

## Run services individually (local dev)

Prerequisites: JDK 17, Maven 3.9+, Node 20+, and a PostgreSQL instance with `productdb`
and `orderdb` databases.

Backend (from `backend/`):

```bash
mvn -pl product-service spring-boot:run   # :8081
mvn -pl order-service   spring-boot:run   # :8082
mvn -pl api-gateway     spring-boot:run   # :8080
```

React (from `frontend-react/`):

```bash
npm install
npm run dev        # http://localhost:5173  (proxies /api -> :8080)
```

Angular (from `frontend-angular/`):

```bash
npm install
npm start          # http://localhost:4200  (proxies /api -> :8080)
```

## REST API

All routes are reachable through the gateway at `http://localhost:8080`.

### Products - product-service

| Method | Path                                            | Description                |
|--------|-------------------------------------------------|----------------------------|
| GET    | `/api/products`                                 | List products (`?search=`) |
| GET    | `/api/products/{id}`                            | Get one product            |
| POST   | `/api/products`                                 | Create a product           |
| PUT    | `/api/products/{id}`                            | Update a product           |
| PATCH  | `/api/products/{id}/decrement-stock?quantity=`  | Reserve stock              |
| DELETE | `/api/products/{id}`                            | Delete a product           |

### Orders - order-service

| Method | Path                              | Description                       |
|--------|-----------------------------------|-----------------------------------|
| GET    | `/api/orders`                     | List orders                       |
| GET    | `/api/orders/{id}`                | Get one order                     |
| POST   | `/api/orders`                     | Place an order (validates stock)  |
| PATCH  | `/api/orders/{id}/status?status=` | Update order status               |

Example - place an order:

```bash
curl -X POST http://localhost:8080/api/orders \
  -H "Content-Type: application/json" \
  -d '{
        "customerName": "Abhay",
        "customerEmail": "abhay@example.com",
        "items": [{ "productId": 1, "quantity": 2 }]
      }'
```

`order-service` calls `product-service` over REST to fetch prices, validate stock, and
decrement inventory - demonstrating inter-service communication.

## Reference

The architecture follows common open-source patterns such as
[vladannovi1234/ecommerce-springboot-react](https://github.com/vladannovi1234/ecommerce-springboot-react)
(api-gateway + product/order services + PostgreSQL).

## Notes

- Each microservice owns its own database (database-per-service pattern).
- CORS is open (`*`) for demo convenience - lock this down for production.
- `ddl-auto: update` auto-creates tables; use Flyway/Liquibase for real deployments.
