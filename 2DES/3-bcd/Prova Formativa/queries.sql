1. Crie uma consulta que liste os funcionários em ordem alfabética de nome:

SELECT * FROM Funcionario ORDER BY funcionario ASC;

2. Crie uma consulta que liste todos os funcionários e seus telefones:

SELECT f.matricula, f.funcionario, t.telefone
FROM Funcionario f
LEFT JOIN Telefone t ON f.matricula = t.matricula
ORDER BY f.matricula, t.telefone;


3. Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pelo ano decrescente:

SELECT * FROM Veiculo
WHERE marca = 'Fiat'
ORDER BY ano DESC;

4. Crie uma consulta que mostre todos os dados dos veículos e a quantidade de manutenções realizadas em cada um:

SELECT v.placa, v.modelo, v.marca, v.ano, COUNT(m.id_manutencao) AS quantidade_manutencoes
FROM Veiculo v
LEFT JOIN Manutencao m ON v.placa = m.placa
GROUP BY v.placa, v.modelo, v.marca, v.ano
ORDER BY v.placa;

5. Crie uma consulta que mostre todas as manutenções acrescida do nome do funcionário que a realizou e o modelo do veículo e salve como uma visão chamada vw_todas_as_manutencoes:

CREATE VIEW vw_todas_as_manutencoes AS 
SELECT m.*, f.matricula AS funcionario, v.modelo 
FROM Manutencao m 
INNER JOIN Funcionario f ON m.placa = f.matricula 
INNER JOIN Veiculo v ON m.placa = v.Placa;

-- CREATE VIEW nova_vw_todas_as_manutencoes AS
-- SELECT m.*, f.funcionario, v.modelo
-- FROM Manutencao m
-- LEFT JOIN Veiculo v ON m.placa = v.placa
-- LEFT JOIN Funcionario f ON f.matricula = m.matricula;






