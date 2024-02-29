// Funções de exibição semelhantes para outras tabelas (Veiculos, Funcionarios, Rotas, Entregas, Pedidos)*/

document.addEventListener('DOMContentLoaded', () => {
  // Endpoint URLs
  const apiUrl = 'http://localhost:3000' // Ajustando a URL com base na configuração do servidor
  const clientesUrl = `${apiUrl}/clientes`
  const veiculosUrl = `${apiUrl}/veiculos`
  const funcionariosUrl = `${apiUrl}/funcionarios`
  const rotasUrl = `${apiUrl}/rotas`
  const entregasUrl = `${apiUrl}/entregas`
  const pedidosUrl = `${apiUrl}/pedidos`

  // Função para buscar dados da API e renderizar em tabela
  const fetchDataAndRender = async (url, tableBodyId, columnOrder) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      renderTable(data, tableBodyId, columnOrder)
    } catch (error) {
      console.error(`Erro ao buscar dados de ${url}:`, error)
    }
  }

  // Especificar a ordem das colunas para cada tabela
  const clientesColumnOrder = [
    'idCliente',
    'nome',
    'telefone',
    'email',
    'endereco'
  ]
  const veiculosColumnOrder = [
    'idVeiculo', 
    'placa', 
    'modelo', 
    'capacidade'
]
  const funcionariosColumnOrder = [
    'idFuncionario', 
    'nome', 
    'cargo', 
    'salario'
]
  const rotasColumnOrder = [
    'idRota', 
    'origem', 
    'destino', 
    'distancia_km'
]
  const entregasColumnOrder = [
    'idEntrega',
    'inicio',
    'fim',
    'status',
    'idVeiculo',
    'motorista',
    'idRota'
  ]
  const pedidosColumnOrder = [
    'idPedido',
    'idveiculo',
    'idCliente',
    'idEntrega',
    'idFuncionario',
    'dataPedido',
    'valor'
  ]

  // Função para preencher a tabela com dados seguindo a ordem específica das colunas
  const renderTable = (data, tableBodyId, columnOrder) => {
    const tableBody = document.getElementById(tableBodyId)

    // Limpar linhas existentes
    tableBody.innerHTML = ''

    // Preenche a tabela com Dados usando a ordem específica das colunas
    data.forEach(item => {
      console.log(item.telefone)
      const row = document.createElement('tr')
      columnOrder.forEach(column => {
        const cell = document.createElement('td')
        /*cell.textContent = item[column];
                row.appendChild(cell);*/

        // Formatar a Data se for uma coluna de Data
        if (
          column === 'inicio' ||
          column === 'fim' ||
          column === 'dataPedido'
        ) {
          const date = new Date(item[column])
          const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
          cell.textContent = date.toLocaleString('pt-BR', options)
        } else {
          cell.textContent = item[column]
        }
        row.appendChild(cell)
      })
      tableBody.appendChild(row)
    })
  }

  // Uso da função para cada tabela
  fetchDataAndRender(clientesUrl, 'clientesTableBody', clientesColumnOrder)
  fetchDataAndRender(veiculosUrl, 'veiculosTableBody', veiculosColumnOrder)
  fetchDataAndRender(funcionariosUrl,'funcionariosTableBody',funcionariosColumnOrder)
  fetchDataAndRender(rotasUrl, 'rotasTableBody', rotasColumnOrder)
  fetchDataAndRender(entregasUrl, 'entregasTableBody', entregasColumnOrder)
  fetchDataAndRender(pedidosUrl, 'pedidosTableBody', pedidosColumnOrder)
})
