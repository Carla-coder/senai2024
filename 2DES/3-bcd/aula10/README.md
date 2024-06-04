-- Senha de acesso ao banco de dados pelo desenvolvedor

-- Digite esta senha no terminal Shell ( Xampp ) 

```bash
create user 'pizzaiolo'@'localhost' identified by '1234';
```
-- Acesso total para o pizzaiolo acessar o banco de dados da pizzaria

```bash
grant all privileges on pizzaria.* to pizzaiolo@localhost;
```

-- Após este acesso, saia ( exit) e acesse com mysql -u pizzaiolo -p
-- digite a senha 1234

-- Remover acesso de insert e update para o ususario pizzaiolo

```bash
revoke insert, update on pizzaria.* from pizzaiolo@localhost;
```

*************************************************************************************************************************

### Resumo de Banco de Dados relacional:

**SQL**
    - DDL Estrutura
    - DML Dados
    - DQL Consulta/Relatório (views)
    - DCL Acesso

*************************************************************************************************************************

### Tarefa:

**Política de acesso mínimo**
 
- Nos ambientes de Produção e testes, sempre trabahamos com a política de acesso mínimo*, 
um usuário deve ter o acesso somente ao reecurso necessário para o seu trabalho. Neste caso 
o escopo de acesso do devpizza é o SGBD com todos os bancos de dados, o escopo do pizzaiolo 
é somente o banco de dados pizzaria e somente para leitura e exclusão.

### Funções

**Desafio**

- Crie uma função que formate os números em formato de dinheiro brasileiro R$ 0.00
- E crie uma visão que mostre os pedidos formatando o valor.

### Procedimento

**Desafio**

- Crie um procedimento que atulize os valores dos pedidos somando os valores dos itens_pedido
- Chame o procedimento de atualiza_valores

### Gatilhos

**Desafio**

- Crie um gatilho que atualize os valores dos pedidos após um item ser inserido no pedido



