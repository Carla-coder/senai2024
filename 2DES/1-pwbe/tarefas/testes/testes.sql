use tarefas;

insert into usuario (nome, email, senha) values
('João Paulo', 'joaopaulo@gmail.com', md5('123456')),
('Maria Silva', 'mariasilva@gmail.com', md5('123456')),
('José Pereira', 'josepereira@gmail.com', md5('123456')),
('Ana Souza', 'anasouza@gmail.com', md5('123456')),
('Carlos Santos', 'carlossantos@gmail.com', md5('123456'));

insert into tarefa (descricao, id_usuario) values
('Estudar para a prova', 1),
('Fazer compras', 2),
('Pagar contas', 3),
('Estudar para o vestibular', 2),
('Fazer exercícios', 1),
('Estudar para o concurso', 1),
('Fazer exercícios', 2),
('Estudar para a prova', 3),
('Fazer compras', 4),
('Pagar contas', 5),
('Estudar para o vestibular', 1),
('Fazer exercícios', 2),
('Estudar para o concurso', 3),
('Fazer exercícios', 4),
('Estudar para a prova', 5),
('Fazer compras', 1),
('Pagar contas', null),
('Estudar para o vestibular', null),
('Fazer exercícios', null),
('Estudar para o concurso', null);

update tarefa set data = date_sub(now(), interval 65 hour), status = 'CONCLUÍDO' where id = 1;
update tarefa set data = date_sub(now(), interval 48 hour), status = 'CONCLUÍDO' where id = 2;
update tarefa set data = date_sub(now(), interval 40 hour), status = 'CONCLUÍDO' where id = 3;
update tarefa set data = date_sub(now(), interval 38 hour), status = 'CONCLUÍDO' where id = 4;
update tarefa set data = date_sub(now(), interval 36 hour), status = 'CONCLUÍDO' where id = 5;
update tarefa set data = date_sub(now(), interval 34 hour), status = 'CONCLUÍDO' where id = 6;
update tarefa set data = date_sub(now(), interval 32 hour), status = 'CONCLUÍDO' where id = 7;
update tarefa set data = date_sub(now(), interval 30 hour), status = 'EM ANDAMENTO' where id = 8;
update tarefa set data = date_sub(now(), interval 28 hour), status = 'EM ANDAMENTO' where id = 9;
update tarefa set data = date_sub(now(), interval 26 hour), status = 'EM ANDAMENTO' where id = 10;
update tarefa set data = date_sub(now(), interval 24 hour), status = 'EM ANDAMENTO' where id = 11;

select * from usuario;
select * from tarefa;