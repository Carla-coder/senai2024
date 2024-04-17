document.addEventListener("DOMContentLoaded", function () {
    // Abrir o modal ao clicar no botão "Quem Somos"
    var modal = document.getElementById('quemSomosModal');
    var btn = document.getElementById("quemSomosBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Função para cadastrar um novo cliente
function cadastrarCliente() {
    var cpf = document.getElementById('cpf').value;
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    // Validação dos dados
    if (!cpf || !nome || !telefone) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    var novoCliente = {
        cpf: cpf,
        nome: nome,
        telefone: telefone
    };

    // Envio dos dados para o servidor (usando AJAX, por exemplo)

    // Exibição de mensagem de sucesso ou erro
    alert('Cliente cadastrado com sucesso!');
}

// Função para reservar um veículo
function reservarVeiculo() {
    // Obter os dados do formulário
    var placa = document.getElementById('placa').value;
    var cpfCliente = document.getElementById('cpfCliente').value;
    var dataRetirada = document.getElementById('dataRetirada').value;
    var dataDevolucao = document.getElementById('dataDevolucao').value;

    // Validar os dados (adicionar validações conforme necessário)

    // Criar um objeto reserva com os dados
    var novaReserva = {
        placa: placa,
        cpfCliente: cpfCliente,
        dataRetirada: dataRetirada,
        dataDevolucao: dataDevolucao
    };

    // Enviar os dados para o servidor (pode ser feito via AJAX)

    // Exibir mensagem de sucesso ou erro
    alert('Veículo reservado com sucesso!');
}

// Função para registrar um aluguel
function registrarAluguel() {
    // Obter os dados do formulário
    var placa = document.getElementById('placa').value;
    var cpfCliente = document.getElementById('cpfCliente').value;
    var dataRetirada = document.getElementById('dataRetirada').value;
    var dataDevolucao = document.getElementById('dataDevolucao').value;
    var subtotal = document.getElementById('subtotal').value;

    // Validação dos dados
    if (!placa || !cpfCliente || !dataRetirada || !dataDevolucao || !subtotal) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    var novoAluguel = {
        placa: placa,
        cpfCliente: cpfCliente,
        dataRetirada: dataRetirada,
        dataDevolucao: dataDevolucao,
        subtotal: subtotal
    };

    // Envio dos dados para o servidor (usando AJAX, por exemplo)

    // Exibição de mensagem de sucesso ou erro
    alert('Aluguel registrado com sucesso!');
}