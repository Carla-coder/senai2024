# App Tarefas
Aplicativo de gestão de tarefas, API de exemplo

## Temas de aprendizado
- Banco de dados (MySQL)
- API (NodeJS)
- CRUD (NodeJS)
- MVC (NodeJS)
- Testes (Insomnia)
- Criptografia md5 nos testes do banco de dados

|Tecnologias|
|-|
|<img src="https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png" style="width:50px;">[MySQL](https://dev.mysql.com/doc/refman/8.0/en/join.html)|
|<img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" style="width:50px;">[NodeJS](https://nodejs.org/en)|
|<img src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg" style="width:50px;">[VsCode](https://code.visualstudio.com/)|
|<img src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png" style="width:50px;"> [Insomnia](https://insomnia.rest/)|

## Como testar esta API
Necessário ter o ambiente/tecnologias acima instaladas
- 1 Clonar este repositório
- 2 Abrir com VsCode
- 3 Instalar o banco de dados
    - A Abrir o XAMPP e clicar em start no MySQL, ou iniciar o MySQL da maneira que preferir.
    - B Rodar os scripts de criação do Banco de dados e de população com dados de teste.
        - ./bd/script.sql
        - ./testes/testes.sql
- 4 Abrir um terminal **cmd** ou **bash** e navegar até a pasta ./api
```bash
cd api
```
- 5 Instalar as dependências do NodeJS
```bash
npm install
```
- 6 Executar com nodemon ou node server.js
```bash
nodemon
```
ou
```bash
npx nodemon
```
ou
```bash
node server.js
```
- 7 Abrir o aplicativo **Insomnia** e importar a coleção de rotas de testes que está na pasta ./testes/insomnia.json
- 8 Executar todos os testes
