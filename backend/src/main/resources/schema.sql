DROP TABLE IF EXISTS product;

CREATE TABLE product (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     price DOUBLE PRECISION CHECK (price >= 0),
     description TEXT
);