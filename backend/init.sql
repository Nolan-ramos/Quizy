CREATE DATABASE IF NOT EXISTS quizy;

USE quizy;

CREATE TABLE IF NOT EXISTS users (
  id_user INT AUTO_INCREMENT PRIMARY KEY,
  email_user VARCHAR(255) NOT NULL,
  password_user VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id_product INT AUTO_INCREMENT PRIMARY KEY,
  name_product VARCHAR(255) NOT NULL,
  price_product VARCHAR(255) NOT NULL
);

INSERT INTO users (email_user, password_user)
VALUES
  ('user1@example.com', 'password1'),
  ('user2@example.com', 'password2'),
  ('user3@example.com', 'password3'),
  ('user4@example.com', 'password4'),
  ('user5@example.com', 'password5'),
  ('user6@example.com', 'password6'),
  ('user7@example.com', 'password7'),
  ('user8@example.com', 'password8'),
  ('user9@example.com', 'password9'),
  ('user10@example.com', 'password10');

INSERT INTO products (name_product, price_product)
VALUES
  ('Produit 1', '9.99'),
  ('Produit 2', '19.99'),
  ('Produit 3', '14.99'),
  ('Produit 4', '24.99'),
  ('Produit 5', '29.99'),
  ('Produit 6', '12.99'),
  ('Produit 7', '17.99'),
  ('Produit 8', '7.99'),
  ('Produit 9', '22.99'),
  ('Produit 10', '11.99');