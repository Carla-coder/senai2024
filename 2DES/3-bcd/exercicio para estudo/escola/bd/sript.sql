-- Criação do Banco de Dados
DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola;
USE escola;

-- Criação das Tabelas

CREATE TABLE Alunos (
    idAluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    turma VARCHAR(10)
);

CREATE TABLE Disciplinas (
    idDisciplina INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    professor VARCHAR(50)
);

CREATE TABLE Matriculas (
    idMatricula INT PRIMARY KEY AUTO_INCREMENT,
    idAluno INT NOT NULL,
    idDisciplina INT NOT NULL,
    FOREIGN KEY (idAluno) REFERENCES Alunos(idAluno),
    FOREIGN KEY (idDisciplina) REFERENCES Disciplinas(idDisciplina)
);

-- Inserção de dados na tabela Alunos
INSERT INTO Alunos (nome, idade, turma) VALUES
    ('João', 15, 'A'),
    ('Maria', 16, 'B'),
    ('Carlos', 14, 'A');

-- Inserção de dados na tabela Disciplinas
INSERT INTO Disciplinas (nome, professor) VALUES
    ('Matemática', 'Prof. Silva'),
    ('História', 'Prof. Oliveira'),
    ('Ciências', 'Prof. Santos');

-- Inserção de dados na tabela Matriculas
INSERT INTO Matriculas (idAluno, idDisciplina) VALUES
    (1, 1),  -- João matriculado em Matemática
    (1, 2),  -- João matriculado em História
    (2, 1),  -- Maria matriculada em Matemática
    (3, 3);  -- Carlos matriculado em Ciências

-- Visualização dos Dados das Tabelas
select * from Alunos;
select * from Diciplinas;
select * from Matriculas;

