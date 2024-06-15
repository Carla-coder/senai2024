
## Sumário

- Introdução

- Estrutura de Arquivos

- Detalhes de Implementação

- Estilização

- Funcionalidades Interativas

- Tecnologias Utilizadas

- Como Executar o Projeto Localmente

- API OMDB



## Introdução

**Cinema na Mão** é um aplicativo web desenvolvido em React para entusiastas de filmes. Oferece funcionalidades como busca de filmes, destaques do mês, recomendações personalizadas e um formulário de contato para interação direta com os desenvolvedores.

Este projeto foi desenvolvido como parte de um aprendizado em React.
## Estrutura de arquivos

A estrutura de arquivos do projeto está organizada da seguinte maneira:

```
cinemanamao/
│
├── public/
│   ├── index.html
│   └── ... (outros arquivos públicos)
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── ... (outros componentes)
│   │
│   ├── pages/
│   │   ├── Busca.js
│   │   ├── Destaques.js
│   │   ├── Indicacao.js
│   │   ├── Contato.js
│   │   └── ... (outras páginas)
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── package.json
└── ...

```

## Detalhes de Implementação

O projeto utiliza React para criar uma aplicação SPA (Single Page Application), onde cada rota é gerenciada pelo React Router. As páginas são componentes funcionais que fazem chamadas assíncronas à API do OMDB para obter informações sobre filmes. A integração com a API é feita através do uso de fetch e async/await para lidar com promessas.



## Estilização

A estilização é feita principalmente através de estilos inline e objetos de estilo JavaScript, garantindo uma aparência consistente e atraente para a aplicação. Utiliza-se cores vibrantes e imagens de fundo para melhorar a experiência visual.
## Funcionalidades Interativas

 O projeto inclui várias seções interativas, como:

- **Destaques do Mês**: Exibe filmes destacados utilizando informações dinâmicas da API do OMDB.

- **Busca de Filmes**: Permite aos usuários buscar por filmes específicos, mostrando resultados em tempo real.

- **Indicações da Semana**: Apresenta recomendações semanais com base em filmes populares.

- **Formulário de Contato**: Possibilita que os usuários enviem mensagens diretamente aos desenvolvedores.

Cada seção é projetada para proporcionar uma experiência única e interativa.


## Tecnologias utilizadas

- **React**: Biblioteca JavaScript para a construção da interface do usuário.

- **React Router**: Para navegação entre páginas de forma declarativa.

- **OMDB API**: API pública para obtenção de informações detalhadas sobre filmes.

- **HTML5 e CSS3**: Utilizados para estruturação e estilização da aplicação.

- **JavaScript (ES6+)**: Linguagem principal para lógica de programação e manipulação de dados.
## Configurações do projeto

### Como Executar o Projeto Localmente

- Clone este repositório para a sua máquina local.

```
git clone git clone https://github.com/yourusername/cinemanamao.git`
```

-  Abra o VSCode.

-  Instale as dependências:

```
cd cinemanamao
npm install
```

- Inicie o Aplicativo:

```
npm start
```

- Certifique-se de ter uma conexão com a internet ativa para que as requisições à API do OMDB funcionem corretamente.






## API OMDB

A API OMDB (Open Movie Database) é uma API pública que fornece informações detalhadas sobre filmes, séries de TV e outros tipos de mídia. Utilizamos a API OMDB para buscar informações como título, ano, sinopse, pôster e outros detalhes dos filmes. Para fazer requisições à API OMDB, é necessário um apikey.

Exemplos de uso na aplicação:

```
Busca de Filmes: http://www.omdbapi.com/?s=${query}&apikey=8ad25d0e
```
```
Detalhes dos Filmes: http://www.omdbapi.com/?i=${movie.imdbID}&apikey=8ad25d0e
```

A documentação completa da API pode ser encontrada em https://www.omdbapi.com/
## Autores

- [@octokatherine](https://www.github.com/octokatherine)


## Instituição de Ensino

- Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack - Segundo Semestre (2024)

- Professor responsável pelo Projeto: Robson B. Souza https://github.com/robsonbsouzaa
## Estrutura de arquivos

A estrutura de arquivos do projeto está organizada da seguinte maneira:

```
cinemanamao/
│
├── public/
│   ├── index.html
│   └── ... (outros arquivos públicos)
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── ... (outros componentes)
│   │
│   ├── pages/
│   │   ├── Busca.js
│   │   ├── Destaques.js
│   │   ├── Indicacao.js
│   │   ├── Contato.js
│   │   └── ... (outras páginas)
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── package.json
└── ...

```
