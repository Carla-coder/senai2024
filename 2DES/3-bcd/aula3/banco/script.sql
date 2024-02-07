-- SQL Script que exclui o banco anterior e crias um novo caso exista
drop database if exists banco;
create database banco;
use banco;

-- DDL
create table Clientes (
    cpf varchar(20) not null primary key,
    nome varchar(100) not null,
    nascimento Date not null,
    enderecoCep varchar(10) not null,
    enderecoNumero varchar(6),
    enderecoComplemento varchar(50)
  );

  describe Clientes;
  insert into Clientes (cpf, nome, nascimento, enderecoCep, enderecoNumero, enderecoComplemento)
  values 
  ('111.111.111.11', 'Arnaldo Coelho', '1960-10-03', '13914-552', ' ', ' ');
  ('888.888.888.88', 'Solange Gomes', '1980-10-03', '13914-553', '23', 'BL14 AP44');
  ('555.555.555.55', 'Ivone Silva Santos', '2001-05-26', '13914-554', '456A', 'Fundos');
  select * from Clientes;

-- Consulta para mostrar os dados de todos os clientes com seus respectivos telefones
  create table Telefones (
    id int null primary key auto_increment,
    cpf varchar(11) not null,
    tipo varchar(20) not null,
    numero varchar(20) not null,
    foreign key (cpf) references Clientes(cpf)
    on delete cascade on update cascade
  );

  describe Telefones;
  insert into Telefones (cpf,tipo,numero)
  values
  ('111.111.111.11', ' ', ' ');
  ('888.888.888.88', 'celular', '(19)98788-8789');
  ('555.555.555.55', 'residencial', '(11)98765-4321');
  select * from  Telefones;

-- Procedimentos armazenado para inserir novas contas e atualizar as informações das mesmas
  create table Contas (
    nConta int not null primary key auto_increment,
    cpf varchar(20) not null,
    tipo varchar(20) not null,
    foreign key (cpf) references Clientes(cpf)
  );

  describe Contas;
  insert into Contas (nConta, cpf, tipo)
  values 
  ('777-7', '111.111.111.11', 'conta-corrente');
  ('333-7', '888.888.888.88', 'conta-corrente');
  ('333-8', '888.888.888.88', 'conta-poupança');
  ('444-6', '555.555.555.55', 'Conta-salário');
  ('777-8', '555.555.555.55', 'conta-poupança');
  select * from Contas;
  
 -- Inserindo movimentação de saída
  create table Movimentacoes (
  id int not null primary key auto_increment,
  tipo varchar(20) not null,
  valor float(10,2) not null,
  origem varchar(50) not null,
  destino varchar(50) not null,  
  nConta int not null,
  quando datetime not null default(curtime()),
  foreign key (nConta) references Contas(nConta)
  );

  describe Movimentacoes;
  insert into Movimentacoes (id,tipo,valor,origem,destino,nConta,quando) 
  values
  ('1001', 'Depósito', '1000.00', 'Caixa-Eletrônico', 'conta-corrente', '777-7', '2021-05-10');
  ('1002', 'Transferência', '1500.00', 'PIX recebido do BB', 'conta-poupança', '333-8', '2022-07-13');
  ('1003', 'Transferência', '1600.00', 'Pagamento Salário-empresa', 'conta-salário', '444-6', '2022-07-15');
  ('1004', 'Depósito', '300.00', 'Caixa-Eletrônico', 'conta-poupança', '777-8', '2022-07-20');
  ('1005', 'Transferência', '200.00', 'conta-corrente', 'conta-poupança', '777-7', '2022-07-25');
  ('1006', 'Transferência', '200.00', 'conta-corrente', 'conta-poupança', '777-8', '2022-07-30');
  ('1007', 'Saque', '100.00', 'Caixa-Eletrônico', 'conta-corrente', '777-7', '2022-07-12');
  ('1008', 'Saque', '100.00', 'Caixa-Eletrônico', 'conta-corrente', '337-7', '2022-07-19');
  ('1009', 'Depósito', '200.00', 'Caixa-Eletrônico', 'conta-poupança', '333-8', '2022-08-15');
  ('1010', 'Depósito', '200.00', 'Caixa-Eletrônico', 'conta-poupança', '777-8', '2022-08-20');
  select  * from Movimentacoes;

