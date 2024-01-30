drop database if exists biblioteca;
create database biblioteca;
use biblioteca;
create table Livros(
    id integer primary key auto_increment,
    titulo varchar(255) not null,
    autor varchar(255) not null,
    anoPublicacao int
   
);
describe Livros;

INSERT INTO Livros (titulo, autor, anoPublicacao) VALUES
('A Revolta de Atlas', 'Ayn Rand', 1957),
('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954),
('Cem Anos de Solidão', 'Gabriel García Márquez', 1967),
('1984', 'George Orwell', 1949),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943);

select * from Livros;
