-- 1. Mostrar os nomes de todos os clientes
SELECT * FROM cliente; 

-- 2. Crie uma consulta que 'agrupe' as entregas e mostre quantas (contagem) cada motorista fez.
SELECT motorista, COUNT(motorista) AS total_entregas FROM Entrega GROUP BY motorista;

select motorista, count(motorista) from entrega group by motorista;
-- E se quisisesse o nome do motorista ao invés do id?
select f.nome, count(e.motorista) from entrega e 
inner join funcionario f onf.idFuncionario = e.motorista 
group by motorista;

-- 3. Salve a consulta anterior em um relatório chamado 'entregas por motorista'
create view EntregasPorMotorista as
salvo no PHPMyAdmin
SELECT * FROM entregaspormotorista

-- 4.  Crie uma consulta que Mostre todas as rotas ordenadas por distância
SELECT * FROM Rota ORDER BY distancia;

--- 5. Crie uma consulta que mostre os funcionários ordenados por nome
SELECT * FROM funcionario ORDER BY nome;

-- 6. Crie uma consulta que mostre qual veículo fez mais entregas e o total de entregas que ele fez.
SELECT placa, COUNT(*) AS total_entregas 
FROM Entrega 
GROUP BY placa 
ORDER BY total_entregas DESC;

select placa, count(idEntrega) as 'entregas' 
from entrega 
group by order by count(idEntrega) desc;

select placa, count(idEntrega) as 'entregas' 
from entrega 
group by order by count(idEntrega) desc limit 1;

-- Mostre o modelo do veiculo e não a placa
select e.placa, v.modelo, count(e.idEntrega) as 'entregas' 
from entrega e 
inner join veiculo v on e.placa = v.placa 
group by count(e.idEntrega) desc limit 1;

-- 7. Crie um relatório (report)  que mostre 'todas as entregas' com os 'nomes dos motoristas', 'modelos dos veículos', salve como 'relatorio_de_entregas_01'
SELECT e.idEntrega, f.nome AS motorista, v.modelo AS modelo_veiculo
FROM Entrega e
JOIN Funcionario f ON e.motorista = f.idFuncionario
JOIN Veiculo v ON e.placa = v.placa;

-- 8. Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos e o valor total da entrega, salve como 'relatorio_de_entregas_02'
SELECT e.idEntrega, f.nome AS motorista, v.modelo AS modelo_veiculo, p.valor AS valor_total
FROM Entrega e
JOIN Funcionario f ON e.motorista = f.idFuncionario
JOIN Veiculo v ON e.placa = v.placa
JOIN Pedido p ON e.idEntrega = p.idEntrega;