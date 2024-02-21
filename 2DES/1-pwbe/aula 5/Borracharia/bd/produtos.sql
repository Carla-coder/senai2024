DROP DATABASE IF EXISTS borracharia;
CREATE DATABASE borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;

CREATE TABLE produtos (
    id varchar(100) AUTO_INCREMENT primary key,
    nome VARCHAR(255) not null,
    descricao text,
    preco DECIMAL(10, 2) not null,
    fornecedor_id varchar,
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