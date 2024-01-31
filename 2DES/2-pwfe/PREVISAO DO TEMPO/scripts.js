
const key = "e0800bb787cb97e908e0cd533766706d" // copiar a key do site
const dados = await fetch() // copiar link da api call

function buscarCidade() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    colocarDados(data);
  }

  function colocarDados(data) {
    const cidadeNome = document.querySelector(".cidade-nome");
    const temperatura = document.querySelector(".temperatura");
    const descricao = document.querySelector(".descricao");
    const umidade = document.querySelector(".umidade");
  }
