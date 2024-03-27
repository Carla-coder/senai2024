
# Projeto Back-end " Sistema de Gerenciamento de Tarefas"

O projeto consiste em aplicar conhecimentos como:

* API
* CRUD
* MVC
* Testes

# Tecnologias utilizadas

* MySQL
* NodeJs
* VSCode
* Insomnia

## Observação: Este projeto é uma demonstração simples e educativa de aplicação de conceitos Back-end utilizando as tecnologias mencionadas.

# Atividade Proposta

Descrição:

O sistema de gerenciamento de tarefas permite aos usuários criar, visualizar, atualizar e excluir tarefas. Cada tarefa pode ter uma descrição, uma data de vencimento e um status (como "A fazer", "Em andamento" ou "Concluído"). Além disso, as tarefas podem ser atribuídas a usuários específicos.

## MER - Dicionário de Dados:

Usuários: Esta tabela armazenará as informações dos usuários do sistema, como nome, e-mail e senha de acesso.

Campos:

- ID (chave primária)
- Nome
- E-mail
- Senha (criptografada)

Tarefas: Esta tabela armazenará as informações das tarefas, incluindo a quem a tarefa está atribuída.

## Essas tarefas são:

- ID (chave primária)
- Descrição
- Data de Vencimento
- Status
- ID do Usuário (chave estrangeira referenciando a tabela de Usuários para identificar a quem a tarefa está atribuída).

## Desafio

Desenvolver as seguintes funcionalidades:

- Autenticação de Usuários:   Permitir que os usuários se registrem, façam login e saiam do sistema
- CRUD de Tarefas: Implementar operações CRUD (Create, Read, Update, Delete) para as tarefas, permitindo que os usuários criem, visualizem, atualizem e excluam suas próprias tarefas.
- Atribuição de Tarefas: Permitir que os usuários atribuam tarefas a si mesmos ou a outros usuários do sistema.
- Filtragem e Ordenação: Implementar funcionalidades para filtrar e ordenar tarefas com base em diferentes critérios, como data de vencimento ou status.




## Como rodar o Projeto

* Clone este repositório em sua máquina local.

* Inicie o Xampp e start o MySQL

* Abra o Visual Studio Code.

*  Abra o terminal e popule o Banco de Dados no PowerSheel , CMD ou Bash e digite o comando:

```
 mysql -u root

```
* Abra o terminal CMD e digite o comando a seguir:

```
npx nodemon

```

* Inicie o Live Server e abra o arquivo 'index.html' para visualizar e testar o Gerenciador de Tarefas.

## Autores

- [@octokatherine](https://www.github.com/octokatherine)


## Instituição de Ensino

Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack - Segundo Semestre (2024)

Professor responsável pelo Projeto: Wellington Fábio de Oliveira Martins https://github.com/wellifabio