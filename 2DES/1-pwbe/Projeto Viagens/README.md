# Agência de Viagens Belo Destino

- Este projeto consiste em criar uma API para uma Agência de Viagens com apenas três tabelas.

### As tabelas possuem os seguintes dados:

- Destinos: id, cidade, valor, data
- Hoteis: id, nome, valor, avaliacao, email, site
- Pontos Turisticos: nome, endereco, telefone, valor

### Consumindo a API

- Criar um Front-End para consumir e enviar dados para esta API.

## Stack utilizada

### ORM- Prisma

- **ORM (Object Relationchip Management)** Gerenciamento de Objeto Relacional

- **PRISMA** - Framework de ORM

- **MVC** - Padrão de projeto 

- **prisma.io** - Documentação 

- **VSCode** - IDE

- **Insomnia** - Testes unitários

- **MYSQL - Mariadb** - Banco de Dados Relacional

- **HTML**

- **CSS**

- **JavaScript**

## Backend

### Iniciando o projeto utilizando Prisma

- Criar uma pasta para o projeto

- Abrir com VSCode

- Instale essas dependências:

- Abrir terminal ( CTRL + " ) no cmd ou bash e instalar o framework globalmente

```bash
npm i -g prisma
```

```bash
npm install cors express dotenv
```

- Para rodar o nodemon

```bash
npm install nodemon
```

- Instalar as dependências do prisma - ver a documentação - database relacional mysql - troca para javascript e instale a dependência. 

```bash
npn install prisma --save-dev
```

- Iniciar o projeto com o ORM Prisma e a biblioteca do SGBD, uso no caso o MySQL - MariaDB

```bash
npx prisma init --datasource-provider mysql
```

-  Editar o arquivo com a variável de ambiente com a string de conexão com o Banco de dados, quando o App for implantado esta string será alterada com as configuraçõe do servidor SGBD.
.env

```bash
DATABASE_URL="mysql://root:@localhost:3306/nome_banco_de_dados"
```

- Criar os Modelos de tabelas e relacionamentos no arquivo ./prisma/shema.prisma 
schema.prisma.

- Executar a primeira migração. Inicialize o XAMPP, start em MYSQL e APACHE e abra o PhpMyAdmin. Para as tabelas aparecerem digite o comando:

```bash
npx prisma migrate dev --name init
```
- Instale essas extensões no VSC ( Prisma e Prisma Inside ).

- Instale as dependências do Prisma Client.

```bash
npm install @prisma/client
```

- Editar os controllers criando os CRUDS. 

- Criar as rotas
./src/routes.js

- Editar o server
server.js

- Executar a API

```bash
nodemon
```

- Testar com Insomnia, Postman ou outra ferramenta de teste unitário de sua preferência.

## Front-end

### Como executar o projeto

- Para conhecer todas as páginas do projeto, clique em index.html e abra com o Live Server do VSCode para navegar por todo o site.

- O projeto esta em fase de melhorias conforme o avanço nos estudos.

## Print das Telas

- Tela 1

![tela 1](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/cafaaa72-5f45-4e12-8296-49462b7f1004)

- Tela 2

![tela 2](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/121b985f-6864-4d5d-97fe-48ffbeaa60e3)

- Tela 3

![destinos](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/d6eb7d9b-ad23-45da-8ea9-4085902eeec6)

- Tela 3 - Botão Adicionar Destino

![pagina destinos](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/5d079ea9-0cd2-4976-b0f0-22ae9b775a04)

- Modal Adicionar Destino

![modal adicionar destino](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/bebf57c9-952d-4d81-931c-5767f842dcb1)

- Modal Editar Destino

![modal editar destino](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/d1f130d7-4817-402a-af03-4d11dcb8d3e6)

- Tela 4

![hoteis](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/1d4ac067-3190-462c-8a09-2efa56a15b88)

- Tela 5

![pontos](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/4e9161e8-ecb7-478e-9c4c-dabd738f1278)

- Tela 6

![tela 6](https://github.com/Carla-coder/Agencia_Belo_Destino/assets/128012862/e1e95722-0239-47c6-a44e-65faf84232bd)

## Autores

- [@octokatherine](https://www.github.com/Carla-coder)

## Instituição de Ensino

- Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack  Segundo Semestre (2024)

- Professor responsável pelo Projeto: Wellington Fabio https://github.com/wellifabio
