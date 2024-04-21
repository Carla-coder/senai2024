
# Projeto Mobile "Escuta Aí!"

# Tecnologias utilizadas

* React-navigator
* Expo
* Yarn

## Observação: Este projeto é uma demonstração simples e educativa de aplicação de conceitos Mobile utilizando as tecnologias mencionadas.

# Atividade Proposta

### Descrição:

A tela 'Escuta Aí!' permite acessar uma playlist de músicas.

## Desafio

Desenvolver as seguintes funcionalidades:

- Desenvolver 4 telas usando a biblioteca react-navigator.
- Desenvolver uma navbar com 4 campos.
- No primeiro campo desenvolver uma tela "Quem Somos" descrevendo sobre a empresa "Escuta Aí!".
- No segundo campo, desenvolver uma tela com a "Playlist" dos álbuns contendo as fotos dos álbuns, nome do artista e a lista de músicas de cada playlist.
- No terceiro campo desenvolver o "Player de Música" com botões de funcionalidade como: 'play' - 'pause' - 'preview' - 'next'.
- No quarto campo, desenvolver o "Peça sua Música" onde o usuário através de um "Form" possa fazer o pedido da música e enviar esta solicitação.
- Estilizar as Screens utilizando a "Logo" enviada pelo instrutor e usar a criatividade no desenvolvimento deste projeto. 

## Desafios encontrados

- Para que o áudio funcione, é necessário importar uma biblioteca de áudio chamada "expo-avi"

## Biblioteca Expo-avi

- A biblioteca Expo AV (Audio and Video) fornece uma interface simplificada para lidar com áudio e vídeo em aplicativos React Native desenvolvidos com o Expo. Ela encapsula funcionalidades relacionadas à reprodução, gravação e manipulação de áudio e vídeo, facilitando o desenvolvimento de aplicativos que envolvem esses tipos de mídia.

## Ao importar e utilizar a biblioteca Expo AVI em seu projeto, você pode:

- Reproduzir arquivos de áudio de diferentes formatos.
- Controlar a reprodução, pausa, parada e avanço rápido de áudio.
- Gravar áudio a partir do microfone do dispositivo.
- Acessar informações sobre a duração, taxa de bits e outras propriedades de arquivos de áudio e vídeo.
- Lidar com eventos relacionados à reprodução de áudio, como o término da reprodução ou erros de reprodução.

Essa biblioteca é útil quando você precisa incorporar funcionalidades relacionadas a áudio em seu aplicativo React Native, como reproduzir músicas, podcasts, efeitos sonoros ou implementar uma função de gravação de voz. É especialmente útil quando você está construindo um aplicativo usando o framework Expo, que fornece APIs e ferramentas adicionais para simplificar o desenvolvimento de aplicativos React Native.




## Como rodar o Projeto

* Clone este repositório em sua máquina local.

* Abra o Visual Studio Code.

* No terminal execute os seguintes comandos: 

```cmd
npm install -g expo
```

```cmd
npx create-expo-app [nome do projeto sem espaço e sem underline]
```

```cmd
cd [nome do projeto]
```

```cmd
npx expo install react-native-web react-dom @expo/metro-runtime
```

* Instale as dependências "Yarn" um de cada vez:

```cmd
yarn add@react-navigation/native
yarn add @react-navigation/native-stack
yarn add @expo/vector-icons
yarn add @react-navigation/material-botton-tabs 
```

```cmd
npx expo install react-native-screens
npm install react-native-screens react-native-safe-area-context
yarn add react-navigation-material-bottom-tabs
yarn add react-native-paper
```

```cmd
npm run web [ comando para inicializar o navegador (Starting Metro Bumbler)]
```



## Documentação da API

### Acesse a documentação pelo link reactnavigation.org


## Autores

- [@octokatherine](https://www.github.com/octokatherine)


## Instituição de Ensino

Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack - Segundo Semestre (2024)

Professor responsável pelo Projeto: Robson B. Souza https://github.com/robsonbsouzaa