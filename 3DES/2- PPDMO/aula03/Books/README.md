
 
# Biblioteca Pessoal - App React Native

## Descrição

Este projeto é um aplicativo de gerenciamento de uma biblioteca pessoal, desenvolvido em React Native com integração ao Firebase. O aplicativo permite que o usuário adicione, edite e exclua livros de sua coleção, incluindo o upload de imagens para os livros via Firebase Storage. O aplicativo utiliza o Firestore como banco de dados para armazenar as informações dos livros e permite a visualização em uma lista.


## Funcionalidades

- **Adicionar Livro**: Insira o nome, autor, editora, ano de publicação, status de leitura (Lido ou Lendo) e uma imagem do livro.

- **Editar Livro**: Atualize as informações de um livro existente.

- **Excluir Livro**: Remova um livro da coleção.

- **Exibir Lista de Livros**: Veja todos os livros da biblioteca pessoal, com detalhes como imagem, autor, editora, ano e status.

- **Upload de Imagens**: O usuário pode selecionar uma imagem da galeria e fazer o upload para o Firebase Storage.


## Tecnologias utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.

- **Firebase Firestore**: Banco de dados NoSQL para armazenar as informações dos livros.

- **Firebase Storage**: Para upload e armazenamento de imagens.

- **React Native Image Picker**: Para selecionar imagens da galeria.

- **Expo**: Ferramenta para simplificar o desenvolvimento e execução do projeto React Native.
## Requisitos

- **Node.js**: v14.x ou superior.

- **Yarn ou NPM**: Para gerenciar dependências.

- **Expo CLI**: Para rodar o aplicativo.
## Instalação

1. Clone este repositório:

```bash
 git clone https://github.com/seu-usuario/Biblioteca_Pessoal.git

```

2. Navegue até a pasta do projeto:

```bash
 cd books

 ```

 3. Instale as dependências:

 ```bash
  yarn install 
  # ou
  npm install

 ```

 4. Configure o Firebase:

 - Crie um projeto no Firebase.

 - Habilite o Firestore Database e o Firebase Storage.

 - Adicione as configurações do Firebase no arquivo firebaseconfig.js.

 5. Inicie o aplicativo

 ```bash
  yarn start
  # ou
  expo start

  ```

  6. Siga as instruções para rodar no simulador ou no dispositivo físico.






    
## Estrutura do Projeto

```bash
.
├── App.js                # Componente principal do aplicativo
├── firebaseconfig.js      # Configurações do Firebase
├── assets/               # Imagens e outros ativos
└── ...
```

## Uso

- Ao abrir o aplicativo, você verá uma lista de livros que já foram adicionados.

- Para adicionar um novo livro, insira as informações solicitadas e selecione uma imagem.

- Você pode editar as informações de um livro tocando no ícone de lápis, ou excluí-lo tocando no ícone de lixeira.

- O status do livro pode ser definido como "Lido" ou "Lendo", conforme o andamento da leitura.
## Print da Tela

- Tela 


- Lista


## Autores

- [@octokatherine](https://www.github.com/Carla-coder)

Desenvolvido com ❤️ por Carla-coder.


## Instituição de Ensino

- Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack - Terceiro Semestre (2024)

Professor responsável pelo Projeto: Robson B. Souza https://github.com/robsonbsouzaa