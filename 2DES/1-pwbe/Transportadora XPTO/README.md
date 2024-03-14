# Transportadora XPTO
## Objetivo: Projeto full stack, exemplo de conceitos como:
- MVC (Model View Controller)
- CRUD (Create Read Uptade Delete)
- API (Application Programming Interface)
- Testes unitários

## Tecnologias
- [XAMPP](https://www.apachefriends.org/pt_br/index.html) MySQL, MariaDB - Banco de dados Relacional
- [NodeJS](https://nodejs.org/en) Framework para desenvolvimento Back-End
- [VsCode](https://code.visualstudio.com/) IDE (Ambiente integrado de desenvolvimento)
- [Insomnia](https://insomnia.rest/download) Ferramenta para testes unitários da API BackEnd

## Dependências
- mysql
- express
- cors

## Para testar
- 1 Faça download deste repositório
- 2 Abra com VsCode
- 3 Abra um terminal **cmd** ou **bash**
- 4 Navegue até a pasta **./api** e instale as dependências usando **npm**
```bahs
cd api
npm i
```
- 5 Abra o XAMPP e clique em **Start** nos serviços Apache e MySQL, depois abra o **Shell** e acesse o MariaDB.
```bash
mysql -u root
```
- 6 Copie o script de criação do banco de dados e cole no shell do MariaDB (./bd/script.sql), copie também os dados de teste que estão na pasta (./testes/populacaobd.sql)
- 7 Abra o insomnia e **importe** o arquivo de testes (./testes/insomnia.json)
- 8 Execute a API Back-End
```bash
npx nodemon
```
- 9 Execute os CRUD testes a partir do insomnia

## Atividade
- Desenvolva os CRUDs das entidades: Funcionário, Entrega, Rota e Pedido