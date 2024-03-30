use alugueis;

INSERT INTO Veiculo (placa, modelo, marca, tipo, diaria)
VALUES
    ('DEA-7981', 'Uno', 'Fiat', 'standart', 100.00),
    ('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120.00),
    ('BEE-7735', 'Saveiro', 'VW', 'standart', 100.00),
    ('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100.00),
    ('BBC-8504', 'Palio', 'Fiat', 'standart', 100.00),
    ('BEB-5885', 'Gol', 'VW', 'standart', 100.00),
    ('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200.00),
    ('CBC-4901', 'Fiorino', 'Fiat', 'utilitario', 120.00),
    ('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200.00)
ON DUPLICATE KEY UPDATE
    modelo = VALUES(modelo),
    marca = VALUES(marca),
    tipo = VALUES(tipo),
    diaria = VALUES(diaria);

-- Inserir dados na tabela Cliente
INSERT INTO Cliente (cpf, nome) 
VALUES
('111.111.111-11', 'Osvaldo Oliveira'),
('222.222.222-22', 'Jaqueline Teixeira'),
('333.333.333-33', 'Keli Matos'),
('444.444.444-44', 'Ursula Souza'),
('555.555.555-55', 'Evandro Silva');

-- Inserir dados na tabela Telefone
INSERT INTO Telefone (cpf_cliente, telefone) 
VALUES
('111.111.111-11', '19-72077-0521'),
('111.111.111-11', '19-06078-6843'),
('222.222.222-22', '19-23003-4864'),
('333.333.333-33', '19-06486-6449'),
('333.333.333-33', '19-53266-7923'),
('444.444.444-44', '19-64378-2404'),
('555.555.555-55', '19-53315-2734');

-- Inserção de dados na tabela Reserva
INSERT INTO Reserva (reserva, retirada, devolucao, dias, subtotal)
VALUES
    ('2024-01-25', '2024-01-25', '2024-02-04', 10, 1000.00),
    ('2024-03-13', '2024-03-13', '2024-03-21', 8, 960.00),
    ('2024-03-29', '2024-03-29', '2024-04-05', 7, 700.00),
    ('2024-03-14', '2024-03-14', '2024-03-24', 10, 1000.00),
    ('2024-03-30', '2024-03-30', '2024-04-07', 8, 800.00),
    ('2024-03-16', '2024-03-16', '2024-04-25', 40, 4000.00),
    ('2024-03-04', '2024-03-05', '2024-04-10', 36, 7200.00),
    ('2024-03-25', '2024-03-25', '2024-04-02', 8, 960.00),
    ('2024-03-15', '2024-03-15', '2024-04-19', 35, 7000.00),
    ('2024-03-04', '2024-03-04', '2024-04-10', 37, 3700.00),
    ('2024-03-24', '2024-03-24', '2024-04-30', 37, 3700.00),
    ('2024-03-27', '2024-03-27', '2024-04-04', 8, 800.00),
    ('2024-03-30', '2024-03-30', '2024-04-04', 5, 500.00),
    ('2024-03-01', '2024-03-02', '2024-04-07', 36, 3600.00),
    ('2024-03-05', '2024-03-05', '2024-04-15', 41, 4100.00),
    ('2024-03-08', '2024-03-08', '2024-04-15', 38, 3800.00),
    ('2024-03-11', '2024-03-11', '2024-04-15', 35, 3500.00),
    ('2024-03-14', '2024-03-14', NULL, 13, 1560.00),
    ('2024-03-17', '2024-03-17', NULL, 10, 1000.00),
    ('2024-03-05', '2024-03-05', NULL, 22, 4400.00),
    ('2024-03-14', '2024-03-14', NULL, 13, 1300.00),
    ('2024-03-23', '2024-03-23', NULL, 4, 400.00),
    (NULL, '2024-05-01', NULL, 0, NULL),
    (NULL, '2024-05-10', NULL, 0, NULL),
    (NULL, '2024-05-19', NULL, 0, NULL);

-- Inserção de dados na tabela Status_Reserva
INSERT INTO Status_Reserva (reserva_id, status)
VALUES
    (1, 'concluido'),
    (2, 'concluido'),
    (3, 'concluido'),
    (4, 'concluido'),
    (5, 'concluido'),
    (6, 'concluido'),
    (7, 'concluido'),
    (8, 'concluido'),
    (9, 'concluido'),
    (10, 'concluido'),
    (11, 'concluido'),
    (12, 'concluido'),
    (13, 'concluido'),
    (14, 'concluido'),
    (15, 'concluido'),
    (16, 'concluido'),
    (17, 'concluido'),
    (18, 'alugado'),
    (19, 'alugado'),
    (20, 'alugado'),
    (21, 'alugado'),
    (22, 'alugado'),
    (23, 'reservado'),
    (24, 'reservado'),
    (25, 'reservado');

select * from Veiculo;
select * from Cliente;
select * from Telefone;
select * from Reserva;
select * from Status_Reserva;
