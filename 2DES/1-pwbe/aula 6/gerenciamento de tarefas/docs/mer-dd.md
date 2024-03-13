# Gerenciamento de Tarefas
## MER - Dicionário de Dados

- Usuario(idUsuario [chave primária], nome, email, senha);
- Tarefa(idTarefa [chave primária], descricao, data de vencimento, status ( A fazer, Em andamento, Concluído), idUsuario[chave estrangeira referencia Usuarios(idUsuario)]);

