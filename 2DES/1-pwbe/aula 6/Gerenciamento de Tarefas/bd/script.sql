DROP DATABASE IF EXISTS tarefa;
CREATE DATABASE tarefa CHARACTER SET UTF8 COLLATE utf8_general_ci;
USE tarefa;

-- DDL Criação da Estrutura da Tabela

-- Definição da tabela Usuário
CREATE TABLE Usuario (
    idUsuario INT  NOT NULL PRIMARY KEY auto_increment,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(100) NOT NULL -- Recomenda-se um tamanho suficiente para armazenar senhas criptografadas
);

-- Definição da tabela Tarefa
CREATE TABLE Tarefa (
    idTarefa INT NOT NULL PRIMARY KEY auto_increment,
    descricao VARCHAR(255),
    data_vencimento DATE,
    status ENUM('A fazer', 'Em andamento', 'Concluído'),
    idUsuario INT,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

describe Usuario;
describe Tarefa;
show tables;
