DROP DATABASE IF EXISTS varejo;
CREATE DATABASE varejo;
USE varejo;

CREATE TABLE Fornecedor (
    id INT PRIMARY KEY,
    nome VARCHAR(20),
    celular VARCHAR(20)
);

CREATE TABLE Funcionario (
    id INT PRIMARY KEY,
    nome VARCHAR(20),
    cargo VARCHAR(20)
);

CREATE TABLE Produto (
    id INT PRIMARY KEY,
    nome VARCHAR(20),
    categoria VARCHAR(30),
    quantidade INT,
    preco DECIMAL(10, 2),
    id_fornecedor INT,
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id)
);

CREATE TABLE Cliente (
    id INT PRIMARY KEY,
    nome VARCHAR(20),
    cep VARCHAR(10),
    rua VARCHAR(10),
    numero VARCHAR(5),
    cidade VARCHAR(10),
    complemento VARCHAR(10),
    obs VARCHAR(20),
    id_funcionario INT,
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id)
);

CREATE TABLE Pedido (
    id INT PRIMARY KEY,
    data DATE,
    valor_total DECIMAL(10, 2),
    status_venda VARCHAR(20),
    id_produto INT,
    id_cliente INT,
    FOREIGN KEY (id_produto) REFERENCES Produto(id),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id)
);