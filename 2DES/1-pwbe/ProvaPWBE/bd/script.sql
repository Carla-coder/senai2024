DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

CREATE TABLE Cliente (
    cpf VARCHAR(14) NOT NULL primary key,
    nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE Telefone (
    cpf VARCHAR(14),
    numero VARCHAR(15) NOT NULL,
    foreign key (cpf) references Cliente(cpf)
);

CREATE TABLE Veiculo (
    placa VARCHAR(8) NOT NULL primary key,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    tipo ENUM('standart', 'utilitario', 'esportivo') NOT NULL,
    diaria DECIMAL(10,2) NOT NULL
);

CREATE TABLE Aluguel (
    id INT NOT NULL primary key AUTO_INCREMENT,
    placa VARCHAR(8) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    reserva DATE NOT NULL,
    retirada DATE DEFAULT NULL,
    devolucao DATE DEFAULT NULL,
    subtotal DECIMAL(10,2) DEFAULT 0.00 NOT NULL,
    foreign key (cpf) references Cliente(cpf),
    foreign key (placa) references Veiculo(placa)
);

describe Cliente;
describe Telefone;
describe Veiculo;
describe Aluguel;

show tables;

USE alugueis;

insert into Cliente (cpf, nome_cliente) 
Values
('111.111.111-11','Osvaldo Oliveira'),
('222.222.222-22','Jaqueline Teixeira'),
('333.333.333-33','Keli Matos'),
('444.444.444-44','Ursula Souza'),
('555.555.555-55','Evandro Silva');

insert into Telefone (cpf, numero) 
Values
('111.111.111-11','19-72077-0521'),
('111.111.111-11','19-06078-6843'),
('222.222.222-22','19-23003-4864'),
('333.333.333-33','19-06486-6449'),
('333.333.333-33','19-53266-7923'),
('444.444.444-44','19-64378-2404'),
('555.555.555-55','19-53315-2734');

insert into Veiculo (placa, modelo, marca, tipo, diaria) 
Values
('DEA-7981','Uno','Fiat','standart',100),
('CBC-4945','Fiorino','Fiat','utilitario',120),
('BEE-7735','Saveiro','VW','standart',100),
('CBA-4403','Sandeiro','Renaut','standart',100),
('BBC-8504','Palio','Fiat','standart',100),
('BEB-5885','Gol','VW','standart',100),
('EDB-2475','Ranger','Ford','esportivo',200),
('CBC-4901','Fiorino','Fiat','utilitario',120);

insert into Aluguel (id, placa, cpf, reserva, retirada, devolucao, subtotal) 
Values 
(1,'DEA-7981','111.111.111-11','2024-01-25','2024-01-25','2024-02-04',0), 
(2,'CBC-4945','222.222.222-22','2024-03-13','2024-03-13','2024-03-21',0), 
(3,'BEE-7735','333.333.333-33','2024-03-29','2024-03-29','2024-04-05',0), 
(4,'CBA-4403','444.444.444-44','2024-03-14','2024-03-14','2024-03-24',0), 
(5,'BBC-8504','444.444.444-44','2024-02-29','2024-02-29','2024-03-07',0), 
(6,'BEB-5885','111.111.111-11','2024-02-16','2024-02-16','2024-03-25',0), 
(7,'EDB-2475','111.111.111-11','2024-02-05','2024-02-05','2024-03-10',0), 
(8,'CBC-4901','444.444.444-44','2024-02-25','2024-02-25','2024-03-02',0), 
(9,'EDB-2475','111.111.111-11','2024-02-15','2024-02-15','2024-03-19',0), 
(10,'DEA-7981','444.444.444-44','2024-02-04','2024-02-04','2024-03-10',0), 
(11,'CBA-4403','555.555.555-55','2024-02-23','2024-02-24','2024-03-30',0), 
(12,'BBC-8504','333.333.333-33','2024-02-27','2024-02-27','2024-03-03',0), 
(13,'BEE-7735','222.222.222-22','2024-02-29','2024-02-29','2024-03-03',0), 
(14,'BEB-5885','111.111.111-11','2024-02-02','2024-02-02','2024-03-07',0), 
(15,'CBA-4403','555.555.555-55','2024-02-05','2024-02-05','2024-03-15',0), 
(16,'BEE-7735','333.333.333-33','2024-02-08','2024-02-08','2024-03-15',0), 
(17,'BBC-8504','444.444.444-44','2024-02-11','2024-02-11','2024-03-15',0), 
(18,'CBC-4945','444.444.444-44','2024-03-14','2024-03-14',null,0), 
(19,'DEA-7981','555.555.555-55','2024-03-16','2024-03-17',null,0), 
(20,'EDB-2475','555.555.555-55','2024-03-25','2024-03-25',null,0), 
(21,'CBA-4403','222.222.222-22','2024-03-28','2024-03-28',null,0), 
(22,'BEB-5885','222.222.222-22','2024-03-23','2024-03-23',null,0), 
(23,'BBC-8504','222.222.222-22','2024-05-01',null,null,0), 
(24,'DEA-7981','111.111.111-11','2024-05-10',null,null,0), 
(25,'CBC-4945','222.222.222-22','2024-05-19',null,null,0);

select * from Cliente;
select * from Telefone;
select * from Veiculo;
select * from Aluguel;
