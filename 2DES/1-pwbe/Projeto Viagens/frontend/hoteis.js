// hoteis.js
document.addEventListener('DOMContentLoaded', async function() {
    const hoteisContainer = document.getElementById('hoteis-container');

    try {
        const response = await fetch('/hoteis');
        const data = await response.json();
        data.forEach(hotel => {
            const hotelElement = document.createElement('div');
            hotelElement.classList.add('hotel');
            hotelElement.innerHTML = `
                <h3>${hotel.nome}</h3>
                <p>Avaliação: ${hotel.avaliacao}</p>
                <p>Valor: R$${hotel.valor.toFixed(2)}</p>
            `;
            hoteisContainer.appendChild(hotelElement);
        });
    } catch (error) {
        console.error('Erro ao buscar hotéis:', error);
    }
});
