CREATE DATABASE IF NOT EXISTS quizy;

USE quizy;

CREATE TABLE IF NOT EXISTS users (
  id_user INT AUTO_INCREMENT PRIMARY KEY,
  email_user VARCHAR(255) NOT NULL,
  password_user VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS product (
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
  ('user10@example.com', 'password10'),
  ('user11@example.com', 'password11'),
  ('user12@example.com', 'password12');