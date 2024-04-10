DROP DATABASE IF EXISTS aluguel_veiculos;
 -- Criação do banco de dados
CREATE DATABASE aluguel_veiculos CHARSET=UTF8 COLLATE utf8_general_ci;
-- Seleção do banco de dados
USE aluguel_veiculos;

-- Criação da tabela de Veículos
CREATE TABLE Veiculos (
    Placa VARCHAR(10) PRIMARY KEY,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Tipo VARCHAR(50),
    Diaria DECIMAL(10,2)
);

-- Inserção dos dados na tabela de Veículos sem repetições
INSERT INTO Veiculos (Placa, Modelo, Marca, Tipo, Diaria) VALUES
('DEA-7981', 'Uno', 'Fiat', 'standart', 100.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200.00);

-- Criação da tabela de Clientes
CREATE TABLE Clientes (
    CPF_Cliente VARCHAR(15) PRIMARY KEY,
    Nome_Cliente VARCHAR(100)
);

-- Inserção dos dados na tabela de Clientes
INSERT INTO Clientes (CPF_Cliente, Nome_Cliente)
VALUES 
('111.111.111-11', 'Osvaldo Oliveira'),
('222.222.222-22', 'Jaqueline Teixeira'),
('333.333.333-33', 'Keli Matos'),
('444.444.444-44', 'Ursula Souza'),
('555.555.555-55', 'Evandro Silva');

-- Criação da tabela de Telefones
CREATE TABLE Telefones (
    CPF_Cliente VARCHAR(15),
    Telefone VARCHAR(50),
    PRIMARY KEY (CPF_Cliente, Telefone),
    FOREIGN KEY (CPF_Cliente) REFERENCES Clientes(CPF_Cliente)
);

-- Inserção dos dados na tabela de Telefones
INSERT IGNORE INTO Telefones (CPF_Cliente, Telefone)
VALUES 
('111.111.111-11', '19-72077-0521'),
('111.111.111-11', '19-06078-6843'),
('222.222.222-22', '19-23003-4864'),
('333.333.333-33', '19-06486-6449'),
('333.333.333-33', '19-53266-7923'),
('444.444.444-44', '19-64378-2404'),
('555.555.555-55', '19-53315-2734');

-- Criação da tabela de Aluguéis
CREATE TABLE Alugueis (
    Placa VARCHAR(10),
    Reserva DATE,
    Retirada DATE,
    Devolucao DATE,
    Dias INT,
    Status VARCHAR(20),
    Subtotal DECIMAL(10, 2),
    CPF_Cliente VARCHAR(15),
    PRIMARY KEY (Placa, CPF_Cliente, Reserva),
    FOREIGN KEY (Placa) REFERENCES Veiculos(Placa),
    FOREIGN KEY (CPF_Cliente) REFERENCES Clientes(CPF_Cliente)
);
-- Inserção dos dados na tabela de Aluguéis
INSERT IGNORE INTO Alugueis (Placa, Reserva, Retirada, Devolucao, Dias, Status, Subtotal, CPF_Cliente)
VALUES 
('DEA-7981', '2024-01-25', '2024-01-25', '2024-02-04', 10, 'concluido', 1000.00, '111.111.111-11'),
('CBC-4945', '2024-03-13', '2024-03-13', '2024-03-21', 8, 'concluido', 960.00, '222.222.222-22'),
('BEE-7735', '2024-03-29', '2024-03-29', '2024-04-05', 7, 'concluido', 700.00, '333.333.333-33'),
('CBA-4403', '2024-03-14', '2024-03-14', '2024-03-24', 10, 'concluido', 1000.00, '444.444.444-44'),
('BBC-8504', '2024-02-29', '2024-02-29', '2024-03-07', 7, 'concluido', 700.00, '111.111.111-11'),
('BEB-5885', '2024-02-16', '2024-02-16', '2024-03-25', 38, 'concluido', 3800.00, '111.111.111-11'),
('EDB-2475', '2024-02-05', '2024-02-05', '2024-03-10', 34, 'concluido', 6800.00, '111.111.111-11'),
('CBC-4901', '2024-02-25', '2024-02-25', '2024-03-02', 6, 'concluido', 720.00, '444.444.444-44'),
('EDB-2475', '2024-02-15', '2024-02-15', '2024-03-19', 33, 'concluido', 6600.00, '555.555.555-55'),
('DEA-7981', '2024-02-04', '2024-02-04', '2024-03-10', 35, 'concluido', 3500.00, '444.444.444-44'),
('CBA-4403', '2024-02-23', '2024-02-24', '2024-03-30', 35, 'concluido', 3500.00, '333.333.333-33'),
('BBC-8504', '2024-02-27', '2024-02-27', '2024-03-03', 5, 'concluido', 500.00, '444.444.444-44'),
('BEE-7735', '2024-02-29', '2024-02-29', '2024-03-03', 3, 'concluido', 300.00, '555.555.555-55'),
('BEB-5885', '2024-02-02', '2024-02-02', '2024-03-07', 34, 'concluido', 3400.00, '111.111.111-11'),
('EDB-2475', '2024-02-05', '2024-02-05', '2024-03-15', 39, 'concluido', 3900.00, '555.555.555-55'),
('BEE-7735', '2024-02-08', '2024-02-08', '2024-03-15', 36, 'concluido', 3600.00, '333.333.333-33'),
('BBC-8504', '2024-02-11', '2024-02-11', '2024-03-15', 33, 'concluido', 3300.00, '111.111.111-11'),
('CBC-4945', '2024-03-14', '2024-03-14', NULL, 19, 'alugado', 2280.00, '444.444.444-44'),
('EDB-2475', '2024-03-16', '2024-03-17', NULL, 16, 'alugado', 1600.00, '555.555.555-55'),
('EDB-2475', '2024-03-25', '2024-03-25', NULL, 8, 'alugado', 1600.00, '555.555.555-55'),
('CBC-4945', '2024-03-28', '2024-03-28', NULL, 5, 'alugado', 500.00, '444.444.444-44'),
('BEB-5885', '2024-03-23', '2024-03-23', NULL, 10, 'alugado', 1000.00, '333.333.333-33');

-- Verificar as tabelas criadas
SELECT * FROM Veiculos;
SELECT * FROM Clientes;
SELECT * FROM Telefones;
SELECT * FROM Alugueis;

-- Mostra todas as tabelas
 SHOW TABLES;

-- Descrição das tabelas
DESCRIBE Veiculos;
DESCRIBE Clientes;
DESCRIBE Telefones;
DESCRIBE Alugueis;

-- Adiciona a coluna 'Diaria' à tabela Veiculos
--  ALTER TABLE Veiculos ADD COLUMN Diaria DECIMAL(10, 2);

-- Remove o ID da Tabela Alugueis
 ALTER TABLE Alugueis DROP COLUMN ID;

-- Remover a coluna ID da tabela Telefones
-- ALTER TABLE Telefones DROP COLUMN ID;
