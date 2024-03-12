-- 1. Mostrar os nomes de todos os clientes
SELECT * FROM cliente;

-- 2. Crie uma consulta que agrupe as entregas e mostre quantas cada motorista fez.
SELECT motorista, COUNT(*) AS total_entregas FROM Entrega GROUP BY motorista;

-- 3. Salve a consulta anterior em um relatório chamado 'entregas por motorista'
salvo no PHPMyAdmin
SELECT * FROM `entregaspormotorista`

-- 4. Mostrar todas as rotas ordenadas por distância:
SELECT * FROM Rota ORDER BY distancia;


