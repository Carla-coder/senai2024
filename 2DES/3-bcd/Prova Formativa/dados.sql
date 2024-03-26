-- Inserção dos dados na tabela Veículo
INSERT INTO Veiculo (placa, modelo, marca, ano)
VALUES 
('DEA-7981', 'Uno', 'Fiat', 2005),
('CBC-4945', 'Fiorino', 'Fiat', 2007),
('BEE-7735', 'Saveiro', 'VW', 2015),
('CBA-4403', 'Sandeiro', 'Renaut', 2012),
('BBC-8504', 'Palio', 'Fiat', 2004),
('BEB-5885', 'Gol', 'VW', 2013),
('EDB-2475', 'Ranger', 'Ford', 2005);

-- Inserção dos dados na tabela Manutencao
INSERT INTO Manutencao (id_manutencao, inicio_manutencao, fim_manutencao, descricao)
VALUES 
(1, '2023-02-25', '2023-03-04', 'Lanterna queimada'),
(2, '2023-03-13', '2023-03-21', 'Farol queimado'),
(3, '2023-03-29', '2023-04-05', 'Troca de pneus dianteiros'),
(4, '2023-04-14', '2023-04-24', 'Troca de pneus dianteiros'),
(5, '2023-04-30', '2023-05-07', 'Farol queimado'),
(6, '2023-05-16', '2023-05-25', 'Troca de pneus traseiros'),
(7, '2023-06-05', '2023-06-10', 'Retrovisor quebrado'),
(8, '2023-06-25', '2023-07-02', 'Troca de óleo e revisão geral'),
(9, '2023-07-15', '2023-07-19', 'Troca de Fluido de Freio'),
(10, '2023-08-04', '2023-08-10', 'Problemas no cabo do acelerador'),
(11, '2023-08-24', '2023-08-31', 'Pane elétrica'),
(12, '2023-08-27', '2023-09-04', 'Rebimboca da parafuseta'),
(13, '2023-08-30', '2023-09-04', 'Troca de cavalos por poneis'),
(14, '2023-09-02', '2023-09-07', 'Lanterna queimada');

-- Inserção dos dados na tabela Funcionario
INSERT INTO Funcionario (matricula, funcionario)
VALUES 
(48482, 'Osvaldo Oliveira'),
(48542, 'Jaqueline Teixeira'),
(48522, 'Keli Matos'),
(48502, 'Ursula Souza'),
(48562, 'Evandro Silva');

-- Inserção dos dados na tabela Telefone
INSERT INTO Telefone (matricula, telefone)
VALUES 
(48482, '19-72077-0521'),
(48482, '19-06078-6843'),
(48542, '19-23003-4864'),
(48522, '19-06486-6449'),
(48522, '19-53266-7923'),
(48502, '19-64378-2404'),
(48562, '19-53315-2734');

select * from Veiculo;
select * from Manutencao;
select * from Funcionario;
select * from Telefone;
