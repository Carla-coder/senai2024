-- Inserção de dados na tabela Usuario
INSERT INTO Usuario (idUsuario, nome, email, senha)
VALUES
    (1, 'João', 'joao@email.com', md5 ('senha123')),
    (2, 'Maria', 'maria@email.com', md5 ('abc456')),
    (3, 'Pedro', 'pedro@email.com', md5 ('789xyz')),
    (4, 'Ana', 'ana@email.com', md5 ('passw0rd')),
    (5, 'Carlos', 'carlos@email.com', md5 ('123abc'));

-- Inserção de dados na tabela Tarefa
INSERT INTO Tarefa (idTarefa, descricao, data_vencimento, status, idUsuario)
VALUES
    (1, 'Revisar relatório', '2024-03-20', 'Em andamento', 1),
    (2, 'Preparar apresentação', '2024-03-15', 'Concluído', 1),
    (3, 'Atualizar banco de dados', '2024-03-25', 'A fazer', 3),
    (4, 'Enviar e-mails', '2024-03-18', 'Em andamento', 2),
    (5, 'Organizar reunião', '2024-03-22', 'A fazer', 5);

    select * from usuario;
    select * from tarefa;
