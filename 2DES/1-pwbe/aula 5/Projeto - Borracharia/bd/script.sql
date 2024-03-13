DROP DATABASE IF EXISTS borracharia;
CREATE DATABASE borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;

-- Tabela de clientes
CREATE TABLE clientes (
    id int AUTO_INCREMENT primary key,
    nome varchar(255) not null,
    endereco varchar(255) not null,
    contato varchar(20) not null
);

INSERT INTO clientes (nome, endereco, contato) VALUES
('A', 'Rua X, 123', '1111-2222'),
('B', 'Rua Y, 456', '3333-4444'),
('C', 'Rua Z, 789', '5555-6666');

select * from clientes;

-- Tabela de fornecedores
CREATE TABLE fornecedores(
    id int AUTO_INCREMENT primary key,
    nome varchar(255) not null,
    endereco varchar(255) not null,
    contato varchar(20) not null
);

INSERT INTO fornecedores (nome, endereco, contato) VALUES
('Fornecedor A', 'Rua A, 123', '1123-4567'),
('Fornecedor B', 'Rua B, 456', '9987-6543'),
('Fornecedor C', 'Rua C, 789', '4456-7890');

select * from fornecedores;

-- Tabela de produtos
CREATE TABLE produtos (
    id int AUTO_INCREMENT not null primary key,
    nome varchar(255) not null,
    descricao text,
    preco decimal(10, 2) not null,
    fornecedor_id int,
    FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id)
);

INSERT INTO produtos (nome, descricao, preco, fornecedor_id) VALUES
('Pneu A', 'Pneu para carros de passeio', 150.00, 1),
('Óleo B', 'Óleo lubrificante sintético', 30.00, 2),
('Amortecedor C', 'Amortecedor para veículos diversos', 80.00, 3),
('Bateria D', 'Bateria automotiva de longa duração', 120.00, 1),
('Pastilha de Freio E', 'Pastilhas de freio para carros', 45.00, 2),
('Lâmpada de Farol F', 'Lâmpada halógena para faróis de veículos', 10.00, 3),
('Filtro de Ar G', 'Filtro de ar de alta eficiência', 15.00, 1);

select * from produtos;