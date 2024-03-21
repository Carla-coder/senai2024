async function calcular() {
    const investimento = document.getElementById("investimento").value;
    if (!investimento) {
        alert("Por favor, informe o valor do investimento.");
        return;
    }

    try {
        const resposta = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
        if (!resposta.ok) {
            throw new Error("Não foi possível obter os dados da API.");
        }
        const dados = await resposta.json();
        console.log(dados); // Adição para verificar a estrutura dos dados

        const valorDolar = parseFloat(dados.USDBRL.ask);
        const valorEuro = parseFloat(dados.EURBRL.ask);
        const valorBitcoin = parseFloat(dados.BTCBRL.ask);
        const valorCDI = parseFloat(dados.CDI[0].value);

        document.getElementById("valorDolar").textContent = valorDolar.toFixed(2);
        document.getElementById("totalDolar").textContent = (investimento / valorDolar).toFixed(2);

        document.getElementById("valorEuro").textContent = valorEuro.toFixed(2);
        document.getElementById("totalEuro").textContent = (investimento / valorEuro).toFixed(2);

        document.getElementById("valorBitcoin").textContent = valorBitcoin.toFixed(4);
        document.getElementById("totalBitcoin").textContent = (investimento / valorBitcoin).toFixed(4);

        document.getElementById("valorCDI").textContent = valorCDI.toFixed(2);
        document.getElementById("totalCDI").textContent = investimento;
    } catch (error) {
        console.error("Ocorreu um erro:", error.message);
        alert("Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.");
    }
}
