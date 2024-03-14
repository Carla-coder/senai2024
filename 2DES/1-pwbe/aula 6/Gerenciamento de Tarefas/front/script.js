// Dados dos usuários
const usuarios = [
    { idUsuario: 1, nome: 'João', email: 'joao@email.com' },
    { idUsuario: 2, nome: 'Maria', email: 'maria@email.com' },
    { idUsuario: 3, nome: 'Pedro', email: 'pedro@email.com' },
    { idUsuario: 4, nome: 'Ana', email: 'ana@email.com' },
    { idUsuario: 5, nome: 'Carlos', email: 'carlos@email.com' }
];

// Dados das tarefas
const tarefas = [
    { idTarefa: 1, descricao: 'Revisar relatório', data_vencimento: '2024-03-20', status: 'Em andamento', idUsuario: 1 },
    { idTarefa: 2, descricao: 'Preparar apresentação', data_vencimento: '2024-03-15', status: 'Concluído', idUsuario: 2 },
    { idTarefa: 3, descricao: 'Atualizar banco de dados', data_vencimento: '2024-03-25', status: 'A fazer', idUsuario: 3 },
    { idTarefa: 4, descricao: 'Enviar e-mails', data_vencimento: '2024-03-18', status: 'Em andamento', idUsuario: 4 },
    { idTarefa: 5, descricao: 'Organizar reunião', data_vencimento: '2024-03-22', status: 'A fazer', idUsuario: 5 }
];

// Função para preencher a tabela de usuários
function preencherTabelaUsuarios() {
    const tbody = document.querySelector('#usuarios tbody');
    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.idUsuario}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>
                <button class="btn btn-danger" onclick="excluirUsuario(${usuario.idUsuario})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para adicionar um novo usuário
function adicionarUsuario() {
    const novoUsuario = {
        idUsuario: usuarios.length + 1,
        nome: 'Novo Usuário',
        email: 'novousuario@email.com'
    };
    usuarios.push(novoUsuario);
    preencherTabelaUsuarios(); // Atualizar a tabela de usuários após adicionar um novo usuário
}

// Função para preencher a tabela de tarefas
function preencherTabelaTarefas() {
    const tbody = document.querySelector('#tarefas tbody');
    tarefas.forEach(tarefa => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${tarefa.idTarefa}</td>
            <td>${tarefa.descricao}</td>
            <td>${tarefa.data_vencimento}</td>
            <td>${tarefa.status}</td>
            <td>${tarefa.idUsuario}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const novaTarefa = {
        idTarefa: tarefas.length + 1,
        descricao: 'Nova Tarefa',
        data_vencimento: '2024-03-31',
        status: 'A fazer',
        idUsuario: 1 // ID de um usuário existente ou lógica para selecionar um usuário
    };
    tarefas.push(novaTarefa);
    preencherTabelaTarefas(); // Atualizar a tabela de tarefas após adicionar uma nova tarefa
}

// Função para excluir um usuário
function excluirUsuario(idUsuario) {
    // Encontrar o índice do usuário na lista de usuários
    const usuarioIndex = usuarios.findIndex(usuario => usuario.idUsuario === idUsuario);

    // Verificar se o usuário foi encontrado
    if (usuarioIndex !== -1) {

    // Remover o usuário da lista de usuários
    usuarios.splice(usuarioIndex, 1);
    } else {
    alert('Usuário com ID ' + idUsuario + ' não encontrado.');
    }

    // Chamando a função para preencher a tabela de usuários
    preencherTabelaUsuarios();
}


// Adicionar event listener para o botão Adicionar Usuário
document.getElementById('btnAdicionarUsuario').addEventListener('click', adicionarUsuario);

// Adicionar event listener para o botão Adicionar Tarefa
document.getElementById('btnAdicionarTarefa').addEventListener('click', adicionarTarefa);

