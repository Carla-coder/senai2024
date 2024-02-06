const key = "e0800bb787cb97e908e0cd533766706d" // copiar a key do site - aspas duplas não precisa colocar ';' no final porque é 'KEY'

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = "Temperatura em " + Math.floor(dados.main.temp) + "C°"
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + " % "
  document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
  
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json()) // lang => para qualquer idioma e metric => temperatura de Celsuius para Farenheit
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value 
    buscarCidade(cidade)
}

document.querySelector(".botao-busca").addEventListener("click", cliqueiNoBotao)




