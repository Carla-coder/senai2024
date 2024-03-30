-- Listar todos
select * from cliente;

-- Filtrar por nome exato
select * from cliente where nome = "Osmar Motta";

-- Filtrar por nome aproximado
SELECT * FROM cliente WHERE nome like '%osmar%';

-- Like iniciado com osmar
SELECT * FROM cliente WHERE nome like 'osmar%';

-- Like terminado com motta
SELECT * FROM cliente WHERE nome like '%motta';

-- like com o mello no meio
SELECT * FROM cliente WHERE nome like '%mello%';

-- Escolhendo os campos e filtrando
SELECT nome, telefone FROM cliente WHERE nome like '%mello%';

-- Filtrando por telefone
SELECT nome, telefone FROM cliente WHERE telefone like '%99%';

-- Ordenar - Sort
SELECT * FROM cliente order by nome;
SELECT * FROM cliente order by nome desc;
SELECT * FROM cliente order by email;
-- Filtrar e Ordenar

SELECT * FROM cliente WHERE nome like 'osmar%' order by email desc;
-- Agrupar - Sempre que agrupar criar um resumo (avg(), min(), max(), sum(), count())
SELECT * FROM pedido WHERE idCliente = 1;
SELECT * FROM pedido GROUP by idCliente;
SELECT *, avg(valor) FROM pedido GROUP by idCliente;
SELECT idCliente, avg(valor) FROM pedido group by idcliente;

-- Agrupar: Ex. quantos pedidos por cliente
SELECT idCliente, count(idCliente) as 'total pedidos' FROM pedido group by idcliente;

-- Agrupar e saber o valor total que cada cliente pediu
SELECT idCliente, sum(valor) as 'valor total dos pedidos' FROM pedido group by idcliente;

-- Só os pedidos mais caros de cada cliente (idCliente e valor)
select idCliente, max(valor) as 'maior valor' from pedido group by idcliente;

-- Para criar Relatórios(VIEW - VISÕES) basta salvar a consulta exemplos:
-- Relatório de total por cliente

create view TotalPorCliente as
SELECT idCliente, sum(valor) as 'total dos pedidos' FROM pedido group by idcliente;

-- Para ver o relatório
SELECT * FROM totalporcliente;

-- Criar um relatório dos pedidos mais caros de cada cliente chame de 'pedidos_mais_caros'
create view pedidos_mais_caros as
select idCliente, max(valor) as 'maior valor' from pedido group by idcliente;

-- Para ver o relatório
SELECT * FROM pedidos_mais_caros;

-- Para remover uma visão use o comando drop
drop view totalporcliente;

-- Criar novamente a visão com um outro nome
create view pedidos_totais_por_cliente as
SELECT idCliente, sum(valor) as 'total dos pedidos' FROM pedido group by idcliente;

-- para ver
select * from pedidos_totais_por_cliente;

-- Juntando dados de diferentes tabelas
-- JOIN
-- INNER JOIN e o ON comparando as chaves primária e estrangeira
select * from cliente inner join pedido on cliente.idcliente = pedido.idCliente;

-- Utilizando Alias (apelido)
select * from cliente c inner join pedido p on c.idcliente = p.idcliente;

-- Escolhendo os principais campos
-- Nome do cliente, o endereço e todos os dados do pedido
Select c.nome, c.endereco, p.* from cliente c inner join pedido p on c.idcliente = p.idcliente;