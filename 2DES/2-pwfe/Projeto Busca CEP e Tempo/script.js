const cepInput = document.getElementById('cep');
const buscarBtn = document.getElementById('buscar');
const resultadoDiv = document.getElementById('resultado');

buscarBtn.addEventListener('click', () => {
    const cep = cepInput.value;
    if (!cep) {
        return alert('Digite um CEP válido');
    }

// Busca o endereço pelo CEP
fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
             return alert('CEP não encontrado');
        }

// Busca a previsão do tempo pela cidade
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.localidade}&appid=e0800bb787cb97e908e0cd533766706d&lang=pt_br`)
    .then(response => response.json())
    .then(dados => {
        const temperatura = dados.main.temp - 273.15;
         const clima = dados.weather[0].description;

// Exibe o resultado
    resultadoDiv.innerHTML = `
        <h2>Endereço:</h2>
        <p>${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}</p>
        <h2>Previsão do Tempo:</h2>
        <p>Temperatura: ${temperatura.toFixed(1)}°C</p>
        <p>Clima: ${clima}</p>
    `;
})
    .catch((error) => {
        console.error('Erro ao buscar previsão do tempo:', error);
        resultadoDiv.innerHTML = `<p>Erro ao buscar previsão do tempo.</p>`;
        });
    });
});