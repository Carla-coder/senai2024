-- Criação do Banco de Dados
DROP DATABASE IF EXISTS transportadora;
CREATE DATABASE transportadora CHARSET=utf8 COLLATE utf8_general_ci;
USE transportadora;

-- Criação das Tabelas

-- Tabela para armazenar informações sobre os clientes
CREATE TABLE Clientes (
    idCliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone INT NOT NULL,
    email VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL
);

CREATE TABLE Veiculos (
    idVeiculo INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(10)  unique NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    capacidade DECIMAL (10, 2) NOT NULL
);

CREATE TABLE Funcionarios (
    idFuncionario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(10) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Rotas (
    idRota INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    origem VARCHAR(100) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    distancia_km DECIMAL(10, 2)
);

CREATE TABLE Entregas (
    idEntrega INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    inicio date,
    fim date,
    status VARCHAR(20),
    idVeiculo INT,
    motorista INT NOT NULL,
    idRota INT NOT NULL,
    FOREIGN KEY (idRota) REFERENCES Rotas(idRota),
    FOREIGN KEY (idVeiculo) REFERENCES Veiculos(idVeiculo)
);
    
CREATE TABLE Pedidos (
    idPedido INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    idveiculo INT NOT NULL,
    idCliente INT NOT NULL,
    idEntrega INT NOT NULL,
    idFuncionario INT NOT NULL,
    dataPedido date NOT NULL,
    valor DECIMAL (50, 2) NOT NULL,
    FOREIGN KEY (idCliente) REFERENCES Clientes(idCliente),
    FOREIGN KEY (idEntrega) REFERENCES Entregas(idEntrega),
    FOREIGN KEY (idFuncionario) REFERENCES Funcionarios(idFuncionario),
    FOREIGN KEY (idVeiculo) REFERENCES Veiculos(idVeiculo)
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

-- Inserção de Dados de teste - 5 rotas
INSERT INTO Rotas (origem, destino, distancia_km) VALUES
    ('Origem1', 'Destino1', 150.5),
    ('Origem2', 'Destino2', 120.2),
    ('Origem3', 'Destino3', 200.8),
    ('Origem4', 'Destino4', 80.3),
    ('Origem5', 'Destino5', 150.5);

INSERT INTO Entregas (inicio, fim, status, idVeiculo, motorista, idRota) VALUES
    ('2024-02-27', '2024-02-27', 'Em andamento', 1, 1, 1),
    ('2024-02-28', '2024-02-28', 'Concluída', 2, 2, 2),
    ('2024-02-27', '2024-02-27', 'Em andamento', 3, 3, 3),
    ('2024-02-28', '2024-02-28', 'Concluída', 1, 1, 1),
    ('2024-02-27', '2024-02-27', 'Em andamento', 2, 2, 2),
    ('2024-02-28', '2024-02-28', 'Concluída', 3, 3, 3),
    ('2024-02-27', '2024-02-27', 'Em andamento', 1, 1, 1),
    ('2024-02-28', '2024-02-28', 'Concluída', 2, 2, 2),
    ('2024-02-27', '2024-02-27', 'Em andamento', 3, 3, 3),
    ('2024-02-28', '2024-02-28', 'Pendente', 1, 1, 1);


INSERT INTO Pedidos (idCliente, idEntrega, dataPedido, valor, idFuncionario, idVeiculo) VALUES
    (1, 1, '2024-02-27', 100.00, 1, 1),
    (2, 1, '2024-02-27', 120.50, 1, 1),
    -- Entrega 2
    (3, 2, '2024-02-28', 80.00, 2, 2),
    (4, 2, '2024-02-28', 90.25, 2, 2),
    -- Entrega 3
    (5, 3, '2024-02-27', 150.75, 3, 3),
    (1, 3, '2024-02-27', 200.00, 3, 3),
    -- Entrega 4
    (2, 4, '2024-02-28', 75.50, 1, 1),
    (3, 4, '2024-02-28', 110.00, 1, 1),
    -- Entrega 5
    (4, 5, '2024-02-27', 95.25, 2, 2),
    (5, 5, '2024-02-27', 130.50, 2, 2),
    -- Entrega 6
    (1, 6, '2024-02-28', 115.75, 3, 3),
    (2, 6, '2024-02-28', 180.00, 3, 3),
    -- Entrega 7
    (3, 7, '2024-02-27', 80.50, 1, 1),
    (4, 7, '2024-02-27', 100.25, 1, 1),
    -- Entrega 8
    (5, 8, '2024-02-28', 120.00, 2, 2),
    (1, 8, '2024-02-28', 150.50, 2, 2),
    -- Entrega 9
    (2, 9, '2024-02-27', 90.75, 3, 3),
    (3, 9, '2024-02-27', 110.50, 3, 3),
    -- Entrega 10
    (4, 10, '2024-02-28', 130.25, 1, 1),
    (5, 10, '2024-02-28', 160.00, 1, 1);

-- Visualização dos Dados das Tabelas
SELECT * FROM Clientes;
SELECT * FROM Veiculos;
SELECT * FROM Funcionarios;
SELECT * FROM Rotas;
SELECT * FROM Entregas;
SELECT * FROM Pedidos;