-- SQL Script que exclui o banco anterior e crias um novo caso exista
drop database if exists banco;
create database banco;
use banco;

-- DDL
describe Clientes;
create table Clientes (
    id int not null auto_increment,
    nome varchar(100) not null,
    telefone varchar(10) not null,
    email varchar(50),
    endereco varchar(50)
  );

  -- Inserir 5 clientes de teste
INSERT INTO clientes (nome, telefone, email, endereco)
VALUES 
    ('Ana', '111-111-1111', 'ana@email.com', 'Rua A, 123'),
    ('Bianca', '222-222-2222', 'bianca@email.com', 'Rua B, 456'),
    ('Caio', '333-333-3333', 'caio@email.com', 'Rua C, 789'),
    ('Dario', '444-444-4444', 'dario@email.com', 'Rua D, 1011'),
    ('Eleonora', '555-555-5555', 'eleonora@email.com', 'Rua E, 1213');

    select * from Clientes;

-- DDL
describe veiculos;
CREATE TABLE veiculos (
    idVeiculo INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(10) not null,
    modelo VARCHAR(50) not null,
    capacidade INT
);


-- Inserir 3 veículos de teste
INSERT INTO veiculos (placa, modelo, capacidade)
VALUES 
    ('ABC123', 'Focus', 5),
    ('XYZ789', 'Cruze', 4),
    ('DEF456', 'Corolla', 5);

    select * from veiculos;

-- DDL
describe funcionarios;
CREATE TABLE funcionarios (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) not null,
    cargo VARCHAR(10) not null,
    salario decimal(10, 2)
);

-- Inserir 3 funcionários de teste

INSERT INTO funcionarios (nome, cargo, salario)
VALUES
    ('João Silva', 'Desenvolvedor', 5000.00),
    ('Maria Santos', 'Analista de Recursos Humanos', 4500.00),
    ('Carlos Oliveira', 'Gerente de Vendas', 6000.00);
    
    select * from funcionarios;


-- DDL
describe rotas;
CREATE TABLE rotas (
    idRota INT PRIMARY KEY AUTO_INCREMENT,
    origem VARCHAR(50) not null,
    destino VARCHAR(50) not null,
    distancia_km decimal(10, 2)
);

-- Inserir 3 rotas de teste

INSERT INTO rotas (origem, destino, distancia_km)
VALUES 
    ('Rua A', 'Rua B', 150.5),
    ('Rua B', 'Rua C', 120.2),
    ('Rua C', 'Rua D', 200.8);

    select * from rotas;

--DDL
describe entregas;
CREATE TABLE entregas (
    idEntrega INT PRIMARY KEY AUTO_INCREMENT,
    inicio VARCHAR(50),
    fim VARCHAR(50),
    status VARCHAR(20),
    idVeiculo INT,
    motorista VARCHAR(50),
    idRota INT,
    FOREIGN KEY (idRota) REFERENCES rotas(idRota),
    FOREIGN KEY (idVeiculo) REFERENCES veiculos(idVeiculo)
);

-- Inserir 10 entregas de teste
INSERT INTO entregas ((inicio, fim, status, idVeiculo, motorista, idRota)
VALUES 
    ('Endereço1', 'Destino1', 'Em andamento', 1, 'Motorista1', 1),
    ('Endereço2', 'Destino2', 'Concluída', 2, 'Motorista2', 2),
    ('Endereço3', 'Destino3', 'Em andamento', 3, 'Motorista3', 3),
    ('Endereço10', 'Destino10', 'Pendente', 1, 'Motorista1', 1);
)

    select * from entregas;

--DDL
describe pedidos;
CREATE TABLE pedidos (
    idPedido INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT,
    idVeiculo INT,
    idFuncionario INT,
    idEntrega INT,
    FOREIGN KEY (idCliente) REFERENCES Clientes(id),
    FOREIGN KEY (idVeiculo) REFERENCES veiculos(idVeiculo),
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios(idFuncionario),
    FOREIGN KEY (idEntrega) REFERENCES entregas(idEntrega)
);

-- Inserir 10 entregas

INSERT INTO entregas (inicio, fim, status, idVeiculo, motorista, idRota)
VALUES 
    ('Endereço1', 'Destino1', 'Em andamento', 1, 'Motorista1', 1),
    ('Endereço2', 'Destino2', 'Concluída', 2, 'Motorista2', 2),
    ('Endereço3', 'Destino3', 'Em andamento', 3, 'Motorista3', 3),
    ('Endereço4', 'Destino4', 'Concluída', 1, 'Motorista1', 4),
    ('Endereço5', 'Destino5', 'Em andamento', 2, 'Motorista2', 5),
    ('Endereço6', 'Destino6', 'Concluída', 3, 'Motorista3', 6),
    ('Endereço7', 'Destino7', 'Em andamento', 1, 'Motorista1', 7),
    ('Endereço8', 'Destino8', 'Concluída', 2, 'Motorista2', 8),
    ('Endereço9', 'Destino9', 'Em andamento', 3, 'Motorista3', 9),
    ('Endereço10', 'Destino10', 'Pendente', 1, 'Motorista1', 10);

-- Inserir 20 pedidos associados a 2 pedidos por entrega

INSERT INTO pedidos (idCliente, idVeiculo, idFuncionario, idEntrega)
VALUES 
    (1, 1, 1, 1),
    (2, 2, 2, 1),
    (3, 3, 3, 2),
    (4, 1, 2, 2),
    (5, 2, 3, 3),
    (1, 3, 1, 3),
    (2, 1, 2, 4),
    (3, 2, 3, 4),
    (4, 3, 1, 5),
    (5, 1, 2, 5),
    (1, 2, 3, 6),
    (2, 3, 1, 6),
    (3, 1, 2, 7),
    (4, 2, 3, 7),
    (5, 3, 1, 8),
    (1, 1, 2, 8),
    (2, 2, 3, 9),
    (3, 3, 1, 9),
    (4, 1, 2, 10),
    (5, 2, 3, 10);

    select * from pedidos;




