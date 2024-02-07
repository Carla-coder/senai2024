drop database if exists banco;
create database banco;
use banco;
create table Cliente (
    cpf varchar(11) not null primary key,
    nome varchar(100) not null,
    nascimento date not null,
    enderecoCep varchar(10) not null,
    enderecoNum varchar(5),
    enderecoComp varchar(50)
  );

  describe Cliente;
  insert into Cliente (cpf, nome, nascimento, enderecoCep, enderecoNum, enderecoComp)
  values 
  ('111.111.111.11', 'Arnaldo Coelho', '1960-10-03', 13914-552, '', ''),
  ('888.888.888.88', 'Solange Gomes', '1980-10-03', 13914-553, '23', 'BL14 AP44');
  select * from Cliente;

  create table telefones (
    id int null primary key auto_increment,
    cpf varchar(11) not null,
    tipo varchar(20) not null,
    numero varchar(20) not null,
    foreign key (cpf) references Cliente(cpf)
  ); 

  create table Contas (
    nContas int not null primary key auto_increment,
    cpf varchar(11) not null,
    tipo varchar(20) not null,
    foreign key (cpf) references Cont
  );

  create table Movimentacoes (
  id int not null primary key auto_increment,
  tipo varchar(20) not null,
  valor float(10,2) not null,
  origem varchar(20) not null,
  destino varchar(20) not null,  
  nContas int not null,
  quando datetime not null default(curtime),
  foreign key(nConta) references Contas(nConta),
  );