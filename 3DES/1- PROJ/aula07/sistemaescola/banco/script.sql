DROP DATABASE IF EXISTS SistemaEscola;
CREATE DATABASE SistemaEscola CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;
USE SistemaEscola;

CREATE TABLE Professor (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);
DESCRIBE Professor;

CREATE TABLE Turma (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    nome_turma VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor) ON DELETE CASCADE
);
DESCRIBE Turma;

CREATE TABLE Atividade (
    id_atividade INT AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT NOT NULL,
    data DATE NOT NULL,
    id_turma INT,
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma) ON DELETE CASCADE
);
DESCRIBE Atividade;

INSERT INTO Professor (nome, email, senha) VALUES
('Carlos Silva', 'carlos.silva@escola.com', 'senha123'),
('Ana Souza', 'ana.souza@escola.com', 'senha456'),
('João Pereira', 'joao.pereira@escola.com', 'senha789'),
('Maria Oliveira', 'maria.oliveira@escola.com', 'senhaabc'),
('Paulo Lima', 'paulo.lima@escola.com', 'senha1234'),
('Juliana Fernandes', 'juliana.fernandes@escola.com', 'senha5678');

INSERT INTO Turma (nome_turma, ano, id_professor) VALUES
('Turma 1A', 2024, 1),
('Turma 2B', 2024, 2),
('Turma 3C', 2024, 1);

INSERT INTO Atividade (descricao, data, id_turma) VALUES
('Atividade de Matemática', '2024-09-25', 1),
('Atividade de Ciências', '2024-09-26', 2),
('Atividade de Português', '2024-09-27', 1),
('Atividade de História', '2024-09-28', 3);

SELECT * FROM Professor;
SELECT * FROM Turma;
SELECT * FROM Atividade;
SHOW TABLES;
