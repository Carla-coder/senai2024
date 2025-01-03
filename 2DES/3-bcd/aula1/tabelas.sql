-- Exclui um banco de dados se existir (DEV)
drop database if exists lojinha;
create database lojinha; 
use lojinha;

-- Criar uma tabela de clientes
create table Clientes(
    id integer primary key not null auto_increment,
    cpf varchar(20) not null,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);

-- Ver a estrutura da tabela
describe Clientes;

-- Ver todas as tabelas
show tables;

-- Excluir uma tablea
drop table Clientes;

-- Ver toda as tabelas
show tables;