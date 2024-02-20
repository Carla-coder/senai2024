document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form1')
  const itemsList = document.getElementById('item-list')
  const totalValueSpan = document.getElementById('Total')
  let editingItemId = null
  const messageDiv = document.getElementById('Mensagem');

  form.addEventListener('submit', e => {
    e.preventDefault()

    const id = document.getElementById('id').value
    const nome = document.getElementById('nome').value
    const Descrição = document.getElementById('Descrição').value
    const Valor = parseFloat(document.getElementById('Valor').value)

    const item = { id, nome: nome, descricao: Descrição, valor: Valor }

    if (editingItemId) {
      updateItem(item)
      editingItemId = null
    } else {
      addItemToList(item)
    }

    calculateTotal()
    form.reset()
    messageDiv.textContent = 'Item cadastrado com sucesso.'
  })

  const addItemToList = item => {
    const row = document.createElement('tr')
    row.innerHTML = `

            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.descricao}</td>
            <td>R$ ${item.valor.toFixed(2)}</td>
            <td>
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluír</button>
            </td>

        `

    itemsList.appendChild(row)

    row.querySelector('.btn-edit').addEventListener('click', () => {
      document.getElementById('id').value = item.id
      document.getElementById('nome').value = item.nome
      document.getElementById('Descrição').value = item.descricao
      document.getElementById('Valor').value = item.valor

      editingItemId = item.id
    })

    row.querySelector('.btn-delete').addEventListener('click', () => {
      row.remove()
      calculateTotal()
    })
  }

  const updateItem = item => {
    // Percorre todas as linhas da tabela
    itemsList.querySelectorAll('tr').forEach(row => {
      // Obtém o ID do item na linha atual
      const itemId = row.cells[0].textContent
      if (itemId === item.id) {
        // Verifica se o ID corresponde ao ID do item sendo editado
        // Atualiza os campos da linha com os novos valores do item
        row.cells[1].textContent = item.nome
        row.cells[2].textContent = item.descricao
        row.cells[3].textContent = `R$ ${item.valor.toFixed(2)}`
      }
    })
  }

  const calculateTotal = () => {
    let total = 0;
  
    itemsList.querySelectorAll('tr').forEach(row => {
      const value = parseFloat(row.cells[3].textContent.replace('R$', ''));
      total += value;
    });
  
    totalValueSpan.textContent = `R$ ${total.toFixed(2)}`;
  }
  
  const loadItem = () => {
    fetch('http://localhost:3000/api/item')
      .then(response => response.json())
      .then(item => {
        item.forEach(item => addItemToList(item))
        calculateTotal()
      })

      .catch(error => console.error('Erro ao carregar itens:', error))
  }

  loadItem()
})
