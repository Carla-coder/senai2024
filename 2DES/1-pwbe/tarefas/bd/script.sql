DROP DATABASE IF EXISTS tarefas;
CREATE DATABASE tarefas CHARSET=UTF8 COLLATE utf8_general_ci;
USE tarefas;

create table usuario (
    id int not null auto_increment primary key,
    nome varchar(255) not null,
    email varchar(255) not null unique,
    senha varchar(255) not null
);

create table tarefa (
    id int not null auto_increment primary key,
    descricao varchar(255) not null,
    data timestamp not null,
    id_usuario int,
    status varchar(30) default 'PENDENTE',
    foreign key (id_usuario) references usuario(id) on delete set null
);