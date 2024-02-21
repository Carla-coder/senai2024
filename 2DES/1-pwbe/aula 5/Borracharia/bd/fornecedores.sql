DROP DATABASE IF EXISTS borracharia;
CREATE DATABASE borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;
-- DDL Criação da estrutura da tabela
CREATE TABLE borracharia(
    id varchar(100) AUTO_INCREMENT primary key,
    nome varchar(255) not null,
    endereco varchar(255) not null,
    contato int not null
);

-- DML Popular a tabela com dados de teste
INSERT INTO fornecedores VALUES
('Fornecedor A', 'Rua A, 123', '123-4567'),
('Fornecedor B', 'Rua B, 456', '987-6543'),
('Fornecedor C', 'Rua C, 789', '456-7890');

select * from fornecedores;





