
-- Criação do Banco de Dados
DROP DATABASE IF EXISTS transportadora;
CREATE DATABASE transportadora;
USE transportadora;

-- Criação das Tabelas

-- Tabela para armazenar informações sobre os clientes
CREATE TABLE Clientes (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(10) NOT NULL,
    email VARCHAR(50),
    endereco VARCHAR(50)
);

CREATE TABLE Veiculos (
    idVeiculo INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(10) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    capacidade INT
);

CREATE TABLE Funcionarios (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(10) NOT NULL,
    salario DECIMAL(10, 2)
);

CREATE TABLE Rotas (
    idRota INT PRIMARY KEY AUTO_INCREMENT,
    origem VARCHAR(50) NOT NULL,
    destino VARCHAR(50) NOT NULL,
    distancia_km DECIMAL(10, 2)
);

CREATE TABLE Entregas (
    idEntrega INT PRIMARY KEY AUTO_INCREMENT,
    inicio VARCHAR(50),
    fim VARCHAR(50),
    status VARCHAR(20),
    idVeiculo INT,
    motorista VARCHAR(50),
    idRota INT,
    FOREIGN KEY (idVeiculo) REFERENCES Veiculos(idVeiculo),
    FOREIGN KEY (idRota) REFERENCES Rotas(idRota)
);

CREATE TABLE Pedidos (
    idPedido INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT NOT NULL,
    idEntrega INT NOT NULL,
    dataPedido DATE NOT NULL,
    valor DECIMAL (10, 2),
    FOREIGN KEY (idCliente) REFERENCES Clientes(idCliente),
    FOREIGN KEY (idEntrega) REFERENCES Entregas(idEntrega)
);

-- Inserção de Dados de Teste - 5 Clientes
INSERT INTO Clientes (nome, telefone, email, endereco) VALUES
    ('Cliente1', '111-111-1111', 'cliente1@email.com', 'Endereço1'),
    ('Cliente2', '222-222-2222', 'cliente2@email.com', 'Endereço2'),
    ('Cliente3', '333-333-3333', 'cliente3@email.com', 'Endereço3'),
    ('Cliente4', '444-444-4444', 'cliente4@email.com', 'Endereço4'),
    ('Cliente5', '555-555-5555', 'cliente5@email.com', 'Endereço5');

-- Inserção de Dados de Teste - 3 Veículos
INSERT INTO Veiculos (placa, modelo, capacidade) VALUES
    ('ABC123', 'Focus', 5),
    ('XYZ789', 'Cruze', 4),
    ('DEF456', 'Corolla', 5);

-- Inserção de Dados de Teste - 3 Funcionários
INSERT INTO Funcionarios (nome, cargo, salario) VALUES
    ('Funcionario1', 'Motorista', 5000.00),
    ('Funcionario2', 'Despachante', 4500.00),
    ('Funcionario3', 'Gerente', 6000.00);

-- Inserção de Dados de teste - 3 rotas
INSERT INTO Rotas (origem, destino, distancia_km) VALUES
    ('Origem1', 'Destino1', 150.5),
    ('Origem2', 'Destino2', 120.2),
    ('Origem3', 'Destino3', 200.8);

-- Inserção de Dados de teste - 10 Entregas
INSERT INTO Entregas (inicio, fim, status, idVeiculo, motorista, idRota) VALUES
    ('Endereço1', 'Destino1', 'Em andamento', 1, 'Motorista1', 1),
    ('Endereço2', 'Destino2', 'Concluída', 2, 'Motorista2', 2),
    ('Endereço3', 'Destino3', 'Em andamento', 3, 'Motorista3', 3),
    ('Endereço4', 'Destino4', 'Concluída', 1, 'Motorista1', 1),
    ('Endereço5', 'Destino5', 'Em andamento', 2, 'Motorista2', 2),
    ('Endereço6', 'Destino6', 'Concluída', 3, 'Motorista3', 3),
    ('Endereço7', 'Destino7', 'Em andamento', 1, 'Motorista1', 1),
    ('Endereço8', 'Destino8', 'Concluída', 2, 'Motorista2', 2),
    ('Endereço9', 'Destino9', 'Em andamento', 3, 'Motorista3', 3),
    ('Endereço10','Destino10', 'Pendente', 1, 'Motorista1', 1);

-- Inserção de Dados de Teste - 20 Pedidos ( sendo 2 por entrega)
INSERT INTO Pedidos (idCliente, idEntrega, dataPedido, valor) VALUES
   (1, 1, '2024-02-27', 100.00),
    (1, 2, '2024-02-28', 120.50),
    (2, 3, '2024-02-27', 80.00),
    (2, 4, '2024-02-28', 90.25),
    (3, 5, '2024-02-27', 150.75),
    (3, 6, '2024-02-28', 200.00),
    (4, 7, '2024-02-27', 75.50),
    (4, 8, '2024-02-28', 110.00),
    (5, 9, '2024-02-27', 95.25),
    (5, 10, '2024-02-28', 130.50),
    (1, 11, '2024-02-27', 115.75),
    (1, 12, '2024-02-28', 180.00),
    (2, 13, '2024-02-27', 80.50),
    (2, 14, '2024-02-28', 100.25),
    (3, 15, '2024-02-27', 120.00),
    (3, 16, '2024-02-28', 150.50),
    (4, 17, '2024-02-27', 90.75),
    (4, 18, '2024-02-28', 110.50),
    (5, 19, '2024-02-27', 130.25),
    (5, 20, '2024-02-28', 160.00);

-- Visualização dos Dados das Tabelas
SELECT * FROM Clientes;
SELECT * FROM Veiculos;
SELECT * FROM Funcionarios;
SELECT * FROM Rotas;
SELECT * FROM Entregas;
SELECT * FROM Pedidos;