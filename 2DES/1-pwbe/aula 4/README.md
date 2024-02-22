
# Projeto Full Stack - Papelaria

Este projeto consiste em um Sistema para registrar todo o inventário de uma Papelaria chamada Papel - Tudo.

## Padrão de Desenvolvimento - MVC

## Definição

*  Modelo (Model):

O Modelo representa a camada de dados e lógica de negócios da aplicação. Ele é responsável por gerenciar o acesso aos dados, realizar operações de leitura e gravação no banco de dados, e implementar a lógica de negócios da aplicação. O Modelo notifica a Visão e o Controlador sobre mudanças nos dados.

* Visão (View):

A Visão é responsável pela apresentação dos dados ao usuário. Ela exibe as informações do Modelo e interage com o usuário. A Visão é passiva e não realiza operações de lógica de negócios. Ela apenas apresenta as informações e encaminha as interações do usuário para o Controlador.

* Controlador (Controller):

O Controlador atua como intermediário entre o Modelo e a Visão. Ele recebe as entradas do usuário da Visão, processa essas entradas, realiza operações no Modelo conforme necessário e atualiza a Visão para refletir quaisquer mudanças nos dados. O Controlador é responsável por gerenciar o fluxo de controle e a interação entre o Modelo e a Visão.

## Aplicabilidade

O padrão MVC (Model-View-Controller) é amplamente utilizado na arquitetura de software devido às suas vantagens em termos de organização, manutenção e escalabilidade. 

* Aplicações Empresariais:

Grandes sistemas empresariais frequentemente adotam o MVC para dividir a lógica de negócios, a apresentação de dados e a manipulação de eventos em camadas separadas, facilitando a manutenção e a evolução do sistema ao longo do tempo.

* Testabilidade:

O padrão MVC facilita a testabilidade do código, pois as diferentes responsabilidades (Modelo, Visão e Controlador) podem ser testadas de forma isolada. Isso é crucial para a criação de testes unitários e a garantia da qualidade do software.












## Tecnologias utilizadas

* NodeJS
* MySQL - Maria DB ( XAMPP )
* Live Server
* Testes com Insomnia
## Como testar

*1.* Clone este repositório.

*2.* Abra o VsCode.

*3.* Abra o XAMPP e clique em Start no MySQL.

*4.* Abra o banco de dados via shell e rode o script.sql para criar e popular o banco de dados.

*5.* Abra o terminal (CMD)


*6.* Navegue até a pasta ./api

```cdm
  cd api
```

*7.* Instale as dependências

```cdm
  npm i
```

*8.* Inicie o Back-end

```cdm
 node server.js ou => nodemon ou => npx nodemon
```

*9.* Acesse a pasta Front e execute o index.html via Live Server.




## Aprendizados

A implementação do padrão MVC no projeto facilitou a organização e manutenção do código, uma vez que separou claramente as responsabilidades do Modelo, Visão e Controlador. O Modelo lidava com a lógica de negócios e acesso ao banco de dados, a Visão gerenciava a apresentação de dados ao usuário, e o Controlador atuava como intermediário, coordenando a interação entre o Modelo e a Visão.
A compreensão de como as diferentes camadas de uma aplicação interagem e a importância da organização do código para facilitar a manutenção foram de suma importância neste projeto.

## Stacks utilizadas

Front-end: HTML, CSS, JS

Back-end: NodeJS, MySQL

Testes: Insomnia
## Autores

* [@octokatherine](https://www.github.com/octokatherine)
## Instituição de Ensino

Escola Senai unidade Jaguariúna - 
Curso Técnico em Desenvolvimento de Sistemas FullStack - segundo semestre

Professores responsáveis pelo Projeto: Wellington - Robson
