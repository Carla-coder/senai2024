-- Criação do banco de dados
DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE=utf8_unicode_ci;
USE alugueis;

-- Tabela Veículo
CREATE TABLE Veiculo (
    placa VARCHAR(10) PRIMARY KEY unique,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    diaria DECIMAL(10, 2) NOT NULL
);

-- Tabela Cliente
CREATE TABLE  Cliente (
    cpf VARCHAR(14) PRIMARY KEY unique,
    nome VARCHAR(100) NOT NULL
);

-- Tabela Telefone
CREATE TABLE Telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cpf_cliente VARCHAR(14) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (cpf_cliente) REFERENCES Cliente(cpf)
);

-- Tabela Reserva
CREATE TABLE Reserva (
    reserva_id INT AUTO_INCREMENT PRIMARY KEY,
    reserva DATE,
    retirada DATE,
    devolucao DATE,
    dias INT,
    subtotal DECIMAL(10, 2),
    placa_veiculo VARCHAR(10),
    cpf_cliente VARCHAR(14),
    FOREIGN KEY (placa_veiculo) REFERENCES Veiculo(placa),
    FOREIGN KEY (cpf_cliente) REFERENCES Cliente(cpf)
);

-- Tabela Status_Reserva
CREATE TABLE Status_Reserva (
    reserva_id INT,
    status VARCHAR(50),
    FOREIGN KEY (reserva_id) REFERENCES Reserva(reserva_id)
);

-- Descrição das tabelas
DESCRIBE Veiculo;
DESCRIBE Cliente;
DESCRIBE Telefone;
DESCRIBE Reserva;
DESCRIBE Status_Reserva;

-- Mostrar todas as tabelas do banco de dados
SHOW TABLES;

