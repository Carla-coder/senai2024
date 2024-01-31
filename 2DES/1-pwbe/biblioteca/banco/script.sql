drop database if exists biblioteca;
create database biblioteca default charset=utf8 collate utf8_unicode_ci;
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
('Cem Anos de Solidão', 'Gabriel Garcia Marquez', 1967),
('A Revolução dos Bichos', 'George Orwell', 1945),
('O Pequeno Principe', 'Antoine de Saint-Exupery', 1943);

select * from Livros;
