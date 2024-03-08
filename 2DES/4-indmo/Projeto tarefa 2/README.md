# Assistente financeiro

O Assistente Financeiro é uma aplicação móvel desenvolvida em React-Native, utilizando o framework Expo Go e o gerenciador de pacotes Yarn. Este aplicativo tem como objetivo fornecer uma solução prática e eficiente para o Cálculo simples de Juros e Data de Nascimento.



## Funcionalidades Principais


- Calculadora de Idade: Utilize a tela dedicada para calcular a idade a partir da data de nascimento inserida e obtenha a data de nascimento a partir da data atual ou outra data que queira.
- Calculadora de Juros: Acesse a tela específica para calcular juros, fornecendo uma ferramenta útil para análise de investimentos.



## Tecnologias utilizadas

- React Native:

Framework de desenvolvimento móvel que permite criar aplicativos nativos para iOS e Android usando JavaScript e React. Ele facilita a construção de interfaces de usuário reativas e eficientes.

- React:

Biblioteca JavaScript para a construção de interfaces de usuário. React é a base do React Native, fornecendo uma abordagem declarativa para a criação de componentes reutilizáveis.

- Expo Go:

Expo é uma plataforma e conjunto de ferramentas para o desenvolvimento de aplicativos React Native. Expo Go é um aplicativo cliente que permite visualizar e testar aplicativos React Native diretamente em dispositivos móveis.

- JavaScript/ES6+:

O código é escrito em JavaScript, com a utilização de características mais recentes do ECMAScript, como arrow functions, destructuring, e o operador spread.

- StyleSheet (React Native):

O React Native utiliza a propriedade StyleSheet para estilizar componentes. As regras de estilo são definidas em um objeto JavaScript, fornecendo uma maneira eficiente de aplicar estilos aos componentes.

- ImageBackground (React Native):

Componente do React Native utilizado para exibir uma imagem de fundo. Ele permite que a interface do usuário seja estilizada com uma imagem de plano de fundo.

- Hooks (useState):

O código faz uso de hooks, como useState, que são recursos introduzidos no React para gerenciar o estado em componentes funcionais.

- TextInput, TouchableOpacity, Text (React Native Components):

Componentes fornecidos pelo React Native para criar interfaces de usuário interativas, como campos de entrada de texto (TextInput), botões pressionáveis (TouchableOpacity), e texto (Text).

- StyleSheet.create (React Native):

Método utilizado para criar um objeto de estilo usando o StyleSheet. Este método otimiza a performance do aplicativo, especialmente em relação à estilização.

- npm/Yarn:

Ferramentas de gerenciamento de pacotes para instalação e controle de dependências do projeto. No código, está mencionado que o projeto utiliza o gerenciador de pacotes Yarn.
## Como Iniciar

- Pré-requisitos: Certifique-se de ter o Node.js, o Expo CLI e o Yarn instalados.

- Clone o repositório.

Instalando as dependências 

```bash
    npm install -g expo
```

Instale as dependências da Expo
```bash
    npx create-expo-app 'my-app'(substitua por assistentefinanceiro)
```
No caso de erro, instale estas dependências

```bash
    npx expo install react-native-web react-dom @expo/metro-runtime 
```

Instale as dependências do Yarn

```bash
    yarn add @react-navigation/native
    yarn add react-native-safe-area-context
    yarn add react-native-screens
    yarn add react-native-svg
    yarn add @react-navigation/native-stack
    yarn add react-native-mask-input
```
Inicie o aplicativo

```bash
yarn run web
```




## Aprendizados

- Aprendendo a navegar entre telas(Screens)

## Navigator em React-Native (telas)

-  O Navigator é uma parte essencial do React Navigation, uma biblioteca popular para gerenciamento de navegação em aplicativos React Native. Ele permite a transição suave entre diferentes telas ou componentes em um aplicativo, facilitando a criação de uma experiência de usuário fluida.

## Screens (Telas):

- No contexto do Navigator, as "screens" referem-se às diferentes telas ou componentes que compõem o seu aplicativo. Cada tela pode representar uma seção específica da sua aplicação, como uma página de login, perfil do usuário ou formulário de cadastro. O Navigator torna fácil a transição entre essas telas, garantindo uma navegação intuitiva.

## Componentes:

- Os componentes do Navigator incluem elementos como 'StackNavigator'

## Regex 

- As expressões regulares (regex) são padrões de busca utilizados para correspondência de strings. No contexto de máscaras de entrada (input masks), as expressões regulares são frequentemente usadas para validar, formatar ou restringir o formato de texto inserido em campos de entrada, como números de telefone, CPFs, datas, entre outros.

## Mask Input

- Ao aplicar regex para máscaras de entrada, você pode definir um padrão específico que o texto inserido deve seguir. Isso é útil para garantir que as informações sejam inseridas de acordo com um formato predefinido. Por exemplo, ao criar uma máscara para Data de Nascimento, você pode usar uma expressão regular para aceitar apenas dígitos e formatar automaticamente o número no estilo desejado. 

- Expressão regular para validar data no formato "dd/mm/aaaa"

```bash
const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
```

- No exemplo acima, a expressão regular 'const regex' valida se a data está no formato "dd/mm/aaaa".







## Desafio

Nesta Atividade o desafio foi desenvolver um Aplicativo com 4 Telas.

- Tela de Login (com dois usuários válidos)
- Tela de Bem Vindo com dois botões ( Calcular Juros / Calcular Idade)
- Tela de Calcular Juros
- Tela de Calcular Idade
## Instituição de Ensino

Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack - segundo semestre

Professor responsável pelo Projeto: Robson B. Souza https://github.com/robsonbsouzaa 
## Autores

- [@octokatherine](https://www.github.com/octokatherine)


