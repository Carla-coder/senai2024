// // script.js
// document.addEventListener('DOMContentLoaded', async function() {
//     const destinosContainer = document.getElementById('destinos-container');
//     const hoteisContainer = document.getElementById('hoteis-container');
//     const pontosContainer = document.getElementById('pontos-container');

//     try {
//         const destinosResponse = await fetch('/destinos');
//         const destinosData = await destinosResponse.json();
//         destinosData.forEach(destino => {
//             const destinoElement = document.createElement('div');
//             destinoElement.classList.add('destino');
//             destinoElement.innerHTML = `
//                 <h3>${destino.nome}</h3>
//                 <p>Valor: R$${destino.valor.toFixed(2)}</p>
//             `;
//             destinosContainer.appendChild(destinoElement);
//         });

//         const hoteisResponse = await fetch('/hoteis');
//         const hoteisData = await hoteisResponse.json();
//         hoteisData.forEach(hotel => {
//             const hotelElement = document.createElement('div');
//             hotelElement.classList.add('hotel');
//             hotelElement.innerHTML = `
//                 <h3>${hotel.nome}</h3>
//                 <p>Avaliação: ${hotel.avaliacao}</p>
//                 <p>Valor: R$${hotel.valor.toFixed(2)}</p>
//             `;
//             hoteisContainer.appendChild(hotelElement);
//         });

//         const pontosResponse = await fetch('/pontos');
//         const pontosData = await pontosResponse.json();
//         pontosData.forEach(ponto => {
//             const pontoElement = document.createElement('div');
//             pontoElement.classList.add('ponto');
//             pontoElement.innerHTML = `
//                 <h3>${ponto.nome}</h3>
//                 <p>Endereço: ${ponto.endereco}</p>
//                 <p>Telefone: ${ponto.telefone}</p>
//                 <p>Valor: R$${ponto.valor.toFixed(2)}</p>
//             `;
//             pontosContainer.appendChild(pontoElement);
//         });
//     } catch (error) {
//         console.error('Erro ao buscar dados:', error);
//     }
// });

document.addEventListener('DOMContentLoaded', async function() {
    try {
        const destinosResponse = await fetch('http://localhost:3000/destinos');
        const hoteisResponse = await fetch('http://localhost:3000/hoteis');
        const pontosResponse = await fetch('http://localhost:3000/pontos');

        const destinosData = await destinosResponse.json();
        const hoteisData = await hoteisResponse.json();
        const pontosData = await pontosResponse.json();

        displayDestinos(destinosData);
        displayHoteis(hoteisData);
        displayPontos(pontosData);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
});

function displayDestinos(destinosData) {
    const destinosContainer = document.getElementById('destinos-container');
    destinosData.forEach(destino => {
        const destinoElement = document.createElement('div');
        destinoElement.classList.add('destino');
        destinoElement.innerHTML = `
            <h3>${destino.nome}</h3>
            <p>Valor: R$${destino.valor.toFixed(2)}</p>
        `;
        destinosContainer.appendChild(destinoElement);
    });
}

function displayHoteis(hoteisData) {
    const hoteisContainer = document.getElementById('hoteis-container');
    hoteisData.forEach(hotel => {
        const hotelElement = document.createElement('div');
        hotelElement.classList.add('hotel');
        hotelElement.innerHTML = `
            <h3>${hotel.nome}</h3>
            <p>Avaliação: ${hotel.avaliacao}</p>
            <p>Valor: R$${hotel.valor.toFixed(2)}</p>
        `;
        hoteisContainer.appendChild(hotelElement);
    });
}

function displayPontos(pontosData) {
    const pontosContainer = document.getElementById('pontos-container');
    pontosData.forEach(ponto => {
        const pontoElement = document.createElement('div');
        pontoElement.classList.add('ponto');
        pontoElement.innerHTML = `
            <h3>${ponto.nome}</h3>
            <p>Endereço: ${ponto.endereco}</p>
            <p>Telefone: ${ponto.telefone}</p>
            <p>Valor: R$${ponto.valor.toFixed(2)}</p>
        `;
        pontosContainer.appendChild(pontoElement);
    });
}
