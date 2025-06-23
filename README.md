📘 Full-Stack CRUD Application

A complete Create, Read, Update, Delete (CRUD) application using:

Backend: Java, Spring Boot, Spring Data JPA

Frontend: React.js (functional components + hooks)

Database: PostgreSQL

⚙️ Backend Setup (Spring Boot)

📌 Prerequisites

Java 17+

Maven

PostgreSQL (running locally)

🔧 Configuration

Update your PostgreSQL credentials in : backend/src/main/resources/application.properties


spring.datasource.url=jdbc:postgresql://localhost:5432/fullstackdb
spring.datasource.username=postgres
spring.datasource.password=1234

spring.sql.init.mode=always
spring.sql.init.schema-locations=classpath:schema.sql

spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

server.port=8080

▶️ Run the Backend

cd backend

./mvnw spring-boot:run

Server runs on: http://localhost:8080

🌐 Frontend Setup (React.js)

📌 Prerequisites

Node.js v18+

npm

▶️ Run the Frontend

cd frontend

npm install

npm start

App runs on: http://localhost:3000

🧪 Running Tests

✅ Backend (JUnit)


cd backend

./mvnw test

🧰 Technologies Used

Backend :	Spring Boot, Spring Data JPA
Frontend :	React.js, Axios, React Router
Database :	PostgreSQL
Testing :	JUnit, Mockito

📬 API Endpoints (Backend) :

GET	/api/products	List all products

GET	/api/products/{id}	Get a product by ID

POST	/api/products	Create new product

PUT	/api/products/{id}	Update a product

DELETE	/api/products/{id}	Delete a product

👨‍💻 Author

Made with 💻 by Hamza Essakhi

Contact: hamzaessakhi01@gmail.com