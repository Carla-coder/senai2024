// destinos.js
document.addEventListener('DOMContentLoaded', async function() {
    const destinosContainer = document.getElementById('destinos-container');

    try {
        const response = await fetch('http://localhost:3000/destinos');
        const data = await response.json();
        data.forEach(destino => {
            const destinoElement = document.createElement('div');
            destinoElement.classList.add('destino');
            destinoElement.innerHTML = `
                <h3>${destino.nome}</h3>
                <p>Valor: R$${destino.valor.toFixed(2)}</p>
            `;
            destinosContainer.appendChild(destinoElement);
        });
    } catch (error) {
        console.error('Erro ao buscar destinos:', error);
    }
});
