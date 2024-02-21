DROP DATABASE IF EXISTS borracharia;
CREATE DATABASE borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;

CREATE TABLE clientes (
    id int AUTO_INCREMENT primary key,
    nome varchar(255) not null,
    endereco varchar(255) not null,
    contato varchar(255) not null
);

INSERT INTO clientes (nome, endereco, contato) VALUES
('A', 'Rua X, 123', '1111-2222'),
('B', 'Rua Y, 456', '3333-4444'),
('C', 'Rua Z, 789', '5555-6666');

select * from clientes;