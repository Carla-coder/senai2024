// pontos.js
document.addEventListener('DOMContentLoaded', async function() {
    const pontosContainer = document.getElementById('pontos-container');

    try {
        const response = await fetch('http://localhost:3000/pontos');
        const data = await response.json();
        data.forEach(ponto => {
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
    } catch (error) {
        console.error('Erro ao buscar pontos turísticos:', error);
    }
});
