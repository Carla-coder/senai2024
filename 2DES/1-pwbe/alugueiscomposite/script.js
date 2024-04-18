document.addEventListener('DOMContentLoaded', function () {
  // Abrir o modal ao clicar no botão "Quem Somos"
  var modal = document.getElementById('quemSomosModal')
  var btn = document.getElementById('quemSomosBtn')
  var span = document.getElementsByClassName('close')[0]

  btn.onclick = function () {
    modal.style.display = 'block'
  }

  span.onclick = function () {
    modal.style.display = 'none'
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }
})

// Função para cadastrar um novo cliente
function cadastrarCliente () {
  var cpf = document.getElementById('cpf').value
  var nome = document.getElementById('nome').value
  var telefone = document.getElementById('telefone').value

  // Validação dos dados
  if (!cpf || !nome || !telefone) {
    alert('Por favor, preencha todos os campos do formulário.')
    return
  }

  var novoCliente = {
    cpf: cpf,
    nome: nome,
    telefone: telefone
  }

  // Envio dos dados para o servidor (usando AJAX, por exemplo)

  // Exibição de mensagem de sucesso ou erro
  alert('Cliente cadastrado com sucesso!')
}

// Função para reservar um veículo
function reservarVeiculo () {
  // Obter os dados do formulário
  var placa = document.getElementById('placa').value
  var cpfCliente = document.getElementById('cpfCliente').value
  var dataRetirada = document.getElementById('dataRetirada').value
  var dataDevolucao = document.getElementById('dataDevolucao').value

  // Validar os dados (adicionar validações conforme necessário)

  // Criar um objeto reserva com os dados
  var novaReserva = {
    placa: placa,
    cpfCliente: cpfCliente,
    dataRetirada: dataRetirada,
    dataDevolucao: dataDevolucao
  }

  // Enviar os dados para o servidor (pode ser feito via AJAX)

  // Exibir mensagem de sucesso ou erro
  alert('Veículo reservado com sucesso!')
}

// Função para registrar um aluguel
function registrarAluguel () {
  // Obter os dados do formulário
  var placa = document.getElementById('placa').value
  var cpfCliente = document.getElementById('cpfCliente').value
  var dataRetirada = document.getElementById('dataRetirada').value
  var dataDevolucao = document.getElementById('dataDevolucao').value
  var subtotal = document.getElementById('subtotal').value

  // Validação dos dados
  if (!placa || !cpfCliente || !dataRetirada || !dataDevolucao || !subtotal) {
    alert('Por favor, preencha todos os campos do formulário.')
    return
  }

  var novoAluguel = {
    placa: placa,
    cpfCliente: cpfCliente,
    dataRetirada: dataRetirada,
    dataDevolucao: dataDevolucao,
    subtotal: subtotal
  }

  // Envio dos dados para o servidor (usando AJAX, por exemplo)

  // Exibição de mensagem de sucesso ou erro
  alert('Aluguel registrado com sucesso!')
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('O DOM foi totalmente carregado.')
  // Função para buscar e exibir clientes
  function buscarClientes () {
    console.log('Iniciando busca por clientes...')
    fetch('/clientes')
      .then(response => response.json())
      .then(clientes => {
        // console.log("Clientes encontrados:", clientes);
        // Limpar tabela de clientes
        const clientesTableBody = document
          .getElementById('clientesTable')
          .querySelector('tbody')
        clientesTableBody.innerHTML = ''

        // Preencher tabela com os dados dos clientes
        clientes.forEach(cliente => {
          const row = document.createElement('tr')
          row.innerHTML = `
              <td>${cliente.cpf}</td>
              <td>${cliente.nome}</td>
              <td>${cliente.telefone}</td>
            `
          clientesTableBody.appendChild(row)
        })
      })
      .catch(error => console.error('Erro ao buscar clientes:', error))
  }

  // Função para buscar e exibir veículos
  function buscarVeiculos () {
    fetch('/veiculos')
      .then(response => response.json())
      .then(veiculos => {
        // Limpar tabela de veículos
        const veiculosTableBody = document
          .getElementById('veiculosTable')
          .querySelector('tbody')
        veiculosTableBody.innerHTML = ''

        // Preencher tabela com os dados dos veículos
        veiculos.forEach(veiculo => {
          const row = document.createElement('tr')
          row.innerHTML = `
              <td>${veiculo.placa}</td>
              <td>${veiculo.modelo}</td>
              <td>${veiculo.marca}</td>
            `
          veiculosTableBody.appendChild(row)
        })
      })
      .catch(error => console.error('Erro ao buscar veículos:', error))
  }

  // Chamar as funções para buscar e exibir os dados dos clientes e veículos
  buscarClientes()
  buscarVeiculos()
})
