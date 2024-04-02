-- Consulta para listar os clientes em ordem alfabética de nome
SELECT *
FROM Cliente
ORDER BY nome ASC;

-- Consulta para listar todos os clientes e seus telefones
SELECT c.nome AS Nome_Cliente, t.telefone AS Telefone
FROM Cliente c
LEFT JOIN Telefone t ON c.cpf = t.cpf_cliente;

-- Consulta para listar todos os veículos em ordem crescente de marca e modelo
SELECT *
FROM Veiculo
ORDER BY marca ASC, modelo ASC;

-- Consulta para mostrar somente os veículos da marca 'Fiat' ordenados pela diária decrescente
SELECT *
FROM Veiculo
WHERE marca = 'Fiat'
ORDER BY diaria DESC;

-- Consulta para mostrar todos os dados dos veículos e a quantidade de aluguéis realizados em cada um
SELECT v.*, COUNT(r.placa_veiculo) AS quantidade_alugueis
FROM Veiculo v
LEFT JOIN Reserva r ON v.placa = r.placa_veiculo
GROUP BY v.placa, v.modelo, v.marca, v.tipo, v.diaria;

-- Consulta à visão vw_todos_os_alugueis
-- CREATE VIEW vw_todos_os_alugueis AS
-- SELECT 
--     c.nome AS cliente_nome,
--     v.modelo,
--     v.marca,
--     r.dias,
--     r.subtotal
-- FROM
--     Reserva r
--     INNER JOIN Cliente c ON r.cpf_cliente = c.cpf
--     INNER JOIN Veiculo v ON r.placa_veiculo = v.placa;

--     SELECT * FROM vw_todos_os_alugueis;

CREATE VIEW vw_todos_os_alugueis AS
SELECT 
    r.reserva_id,
    c.nome AS nome_cliente,
    v.modelo,
    v.marca,
    r.dias,
    r.subtotal
FROM 
    Reserva r
JOIN 
    Cliente c ON r.cpf_cliente = c.cpf
JOIN 
    Veiculo v ON r.placa_veiculo = v.placa;

    SELECT * FROM vw_todos_os_alugueis;



