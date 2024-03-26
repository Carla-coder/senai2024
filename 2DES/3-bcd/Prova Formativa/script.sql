drop database if exists loja;
create database loja CHARSET=UTF8 COLLATE=utf8_unicode_ci;
use loja;

-- Criação da tabela Veículo
CREATE TABLE Veiculo (
    placa VARCHAR(20) PRIMARY KEY,
    modelo VARCHAR(50),
    marca VARCHAR(50),
    ano INT
);

-- Criação da tabela Manutenção
CREATE TABLE Manutencao (
    id_manutencao INT PRIMARY KEY,
    inicio_manutencao DATE,
    fim_manutencao DATE,
    descricao VARCHAR(100),
    placa VARCHAR(20),
    FOREIGN KEY (placa) REFERENCES Veiculo(placa)
);

-- Criação da tabela Funcionário
CREATE TABLE Funcionario (
    matricula INT PRIMARY KEY,
    funcionario VARCHAR(100)
);

-- Criação da tabela Telefone
CREATE TABLE Telefone (
    matricula INT,
    telefone VARCHAR(20),
    PRIMARY KEY (matricula, telefone),
    FOREIGN KEY (matricula) REFERENCES Funcionario(matricula)
);

--DDL - ALTER
alter table Telefone CHANGE telefone numero VARCHAR(20);

describe Veiculo;
describe Manutencao;
describe Funcionario;
describe Telefone;
show tables;