# Landing Page  Carla-coder

Este é o repositório da Landing Page pessoal de Carla Mozena, também conhecida como Carla-coder nesta nova fase como Dev. O site serve como um portfólio para apresentar minhas habilidades, experiências e projetos na área do desenvolvimento web. Além disso, inclui informações sobre minha transição de carreira e meu trabalho como artesã e professora de artes.

## Funcionalidades do site

- **Seções de navegação**: O site possui um menu de navegação que permite acesso rápido às seções de Experiências, Quem Sou, Meus Projetos Tech e Redes Sociais.
- **Modal de Cadastro e Login**: Modal pop-up para cadastro e login de usuários.
- **Botão 'Voltar ao Topo'**: Um botão para rolar a página de volta ao topo.
- **Integração com GitHub**: Exibição dos repositórios públicos do GitHub da Carla-coder.

## Novas Funcionalidades implementadas

Eu  adicionei várias funcionalidades e melhorias ao projeto original, incluindo:

1. **Modais para Botões de Cadastrar e Entrar**: Adicionei modais ao clicar nos botões de "Cadastrar" e "Entrar", pois os mesmos não possuiam funções, eram fakes e estáticos. Com a implementação dos Modais, os mesmos são apenas um exemplo, pois os botões não possuem ainda uma integração com o backend. 

2. **Transição Suave nos Ícones das Redes Sociais**: Melhorei a experiência do usuário ao adicionar transições suaves nos ícones das redes sociais, tornando a interação mais agradável visualmente.

3. **Botão de Voltar ao Topo**: Incluí um botão que permite aos usuários retornarem ao topo da página com facilidade, melhorando a navegabilidade dentro do site.

4. **Estilizações Adicionais em CSS, HTML e JavaScript**: Fiz várias melhorias estéticas e funcionais no código CSS, HTML e JavaScript, garantindo uma interface mais moderna e responsiva.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API para integração com a API do GitHub.
## Estrutura de Diretórios

```
├── images
│   ├── avatarcarla.jpeg
│   ├── beecountrylogo.png
│   └── eu.jpg
├── style.css
├── main.js
├── index.html
└── README.md

```
## Seções do Site

1. **Header**

**O cabeçalho contém**:

- Logo do site.
- Menu de navegação.
- Botões para abrir os modais de Cadastro e Login.

2. **Main**

2.1. **First Section**
- Apresentação da Carla Mozena, destacando suas habilidades e interesses.

2.2. **Second Section (Experiências)**
- Lista das tecnologias e ferramentas com as quais Carla tem experiência.

2.3. **Third Section (Quem Sou)**
- Descrição detalhada sobre a trajetória profissional e pessoal de Carla, destacando sua transição de carreira e paixão pelas artes.

2.4. **Fourth Section (Meus Projetos Tech)**
- Integração com a API do GitHub para listar os repositórios públicos de Carla-coder.

3. **Footer (Redes Sociais)**

- Links para as redes sociais de Carla, incluindo Instagram, LinkedIn, GitHub, Facebook e YouTube.
## Como Executar o Projeto

- Clone o repositório:

```
git clone https://github.com/Carla-coder/landing-page.git
```

- Navegue até o diretório do projeto:

```
cd landing-page
```

- Abra o arquivo index.html em seu navegador preferido. Eu usei o Live Server do VSCode.

# Scripts

### JavaScript (main.js)

- **getProjects**: Função para buscar os repositórios públicos do GitHub e exibi-los na seção "Meus Projetos Tech".
- **showProjects**: Função para renderizar os repositórios no DOM.
- **openModal e closeModal**: Funções para abrir e fechar os modais de Cadastro e Login.
- **Event Listeners**: Listeners para os botões de ação e submissão de formulários.
- **scrollFunction**: Função para mostrar ou ocultar o botão de rolar ao topo com base na rolagem da página.

# CSS (style.css)

- Customização da aparência do site usando variáveis de cores, fontes e estilos para diferentes elementos.
- Estilização dos modais e botão 'Voltar ao Topo'.
- Personalização da barra de rolagem.

## Print das Telas

- Tela 1
  
![1](https://github.com/Carla-coder/senai2024/assets/128012862/29e57677-33a6-44a5-b764-5e926e5d2f0f)

- Tela 2
  
![3](https://github.com/Carla-coder/senai2024/assets/128012862/a845353c-d159-4b3f-b7fc-33be6d1992b0)

- Tela 3

![4](https://github.com/Carla-coder/senai2024/assets/128012862/8d578cd0-7194-46ce-8628-f13410f267d4)

- Modal Cadastrar
  
![5](https://github.com/Carla-coder/senai2024/assets/128012862/67ff5fef-e6d5-4138-bf04-afe4f9a244ff)

- Modal Entrar

![6](https://github.com/Carla-coder/senai2024/assets/128012862/fd53d571-8ec1-477b-95b5-86cde89a1989)

## Agradecimentos

Agradeço ao youtuber Gustavo Nietzke pelo projeto original que serviu de base e inspiração para este trabalho.

## Autores

- [@octokatherine](https://www.github.com/Carla-coder)

