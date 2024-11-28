const uri = "http://localhost:4000/";

const conteiner = document.getElementById("conteiner");
const prioridadeBaixa = document.getElementById("prioridadeBaixa");
const prioridadeMedia = document.getElementById("prioridadeMedia");
const prioridadeAlta = document.getElementById("prioridadeAlta");
let usuarios = [];
let tarefas = [];

// Listar usuários
fetch(uri + "usuarios")
  .then((resp) => resp.json())
  .then((resp) => {
    usuarios = resp;
    if (usuarios.length > 0) {
      // Selecionar o primeiro usuário para listar as tarefas
      listarTarefas(usuarios[0].id); // Passar o id do primeiro usuário
    }
  });

// Listar tarefas
function listarTarefas(usuarioId = null, status = "todos") {
    prioridadeBaixa.innerHTML = "";
    prioridadeMedia.innerHTML = "";
    prioridadeAlta.innerHTML = "";

    fetch(uri + "tarefas")
    .then((resp) => resp.json())
    .then((resp) => {
        tarefas = resp.filter(tarefa => 
            (status === "todos" || tarefa.status === status) &&
            (usuarioId === null || tarefa.usuarioId === usuarioId)
        );
        tarefas.forEach((tarefa) => {
            const usuario = usuarios.find(u => u.id === tarefa.usuarioId);
            if (usuario) {
                const tarefaHTML = `
                <div class="card">
                    <div class="areas">
                        <p>Usuário: ${usuario.nome}</p>
                        <p>Descrição: ${tarefa.descricao}</p>
                        <p>Status: ${tarefa.status}</p>
                        <p>Data: ${new Date(tarefa.data).toLocaleDateString("pt-BR")}</p>
                    </div>
                    <div class="areas">
                        <button onclick="editarTarefa(${tarefa.id})">Editar</button>
                        <button class="excluir" onclick="excluirTarefa(${tarefa.id})">Excluir</button>
                    </div>
                </div>`;
                if (tarefa.prioridade === "baixa") prioridadeBaixa.innerHTML += tarefaHTML;
                if (tarefa.prioridade === "media") prioridadeMedia.innerHTML += tarefaHTML;
                if (tarefa.prioridade === "alta") prioridadeAlta.innerHTML += tarefaHTML;
            } else {
                console.log(`Usuário com id ${tarefa.usuarioId} não encontrado.`);
            }
        });
    })
    .catch((error) => console.error("Erro ao carregar tarefas:", error));
}


// Cadastrar usuários
function novoUsuario() {
  conteiner.innerHTML = `
    <form id="novoUsuario">
        <h2>Novo Usuário</h2>
        <input type="text" name="nome" placeholder="Digite o nome" required>
        <input type="email" name="email" placeholder="Digite o email" required>
        <button type="submit">Cadastrar</button>
    </form>`;

  const novoUsuario = document.getElementById("novoUsuario");
  novoUsuario.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados = {
      nome: novoUsuario.nome.value,
      email: novoUsuario.email.value,
    };
    fetch(uri + "usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    })
      .then((resp) => resp.status)
      .then((status) => {
        if (status === 201) {
          alert("Usuário cadastrado com sucesso!");
          window.location.reload();
        } else alert("Erro ao cadastrar usuário!");
      });
  });
}

// Cadastrar tarefas
function novaTarefa() {
  conteiner.innerHTML = `
    <form id="novaTarefa">
        <h2>Nova Tarefa</h2>
        <select name="prioridade" required>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
        </select>
        <input type="text" name="descricao" placeholder="Descrição da tarefa" required>
        <select name="status" required>
            <option value="a fazer">A Fazer</option>
            <option value="fazendo">Fazendo</option>
            <option value="pronto">Pronto</option>
        </select>
        <select name="usuario" required>
            ${usuarios.map(
              (usuario) =>
                `<option value="${usuario.id}">${usuario.nome}</option>`
            )}
        </select>
        <button type="submit">Cadastrar</button>
    </form>`;

  const novaTarefa = document.getElementById("novaTarefa");
  novaTarefa.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados = {
      prioridade: novaTarefa.prioridade.value.toLowerCase(), // Conversão para minúsculas
      descricao: novaTarefa.descricao.value,
      status: novaTarefa.status.value.replace(" ", "_").toUpperCase(), // Enum: A_FAZER, FAZENDO, PRONTO
      usuarioId: Number(novaTarefa.usuario.value), 
      data: new Date().toISOString(),
    };

    console.log("Dados enviados ao backend:", dados);

    fetch(uri + "tarefas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    })
      .then((resp) => resp.json()) // Receber resposta completa
      .then((res) => {
        console.log("Resposta do servidor:", res); 
        if (res.error) {
          alert(`Erro ao cadastrar tarefa: ${res.error}`);
        } else {
          alert("Tarefa cadastrada com sucesso!");
          listarTarefas(); // Recarrega a lista de tarefas
        }
      })
      .catch((error) => console.error("Erro na requisição:", error));
  });
}

// Editar tarefa
function editarTarefa(id) {
  const tarefa = tarefas.find((t) => t.id === id);
  conteiner.innerHTML = `
    <form id="editarTarefa">
        <h2>Editar Tarefa</h2>
        <select name="prioridade">
            <option value="baixa" ${
              tarefa.prioridade === "baixa" ? "selected" : ""
            }>Baixa</option>
            <option value="media" ${
              tarefa.prioridade === "media" ? "selected" : ""
            }>Média</option>
            <option value="alta" ${
              tarefa.prioridade === "alta" ? "selected" : ""
            }>Alta</option>
        </select>
        <input type="text" name="descricao" value="${
          tarefa.descricao
        }" required>
        <select name="status">
            <option value="A_FAZER" ${
              tarefa.status === "A_FAZER" ? "selected" : ""
            }>A Fazer</option>
            <option value="FAZENDO" ${
              tarefa.status === "FAZENDO" ? "selected" : ""
            }>Fazendo</option>
            <option value="PRONTO" ${
              tarefa.status === "PRONTO" ? "selected" : ""
            }>Pronto</option>
        </select>
        <select name="usuario">
            ${usuarios.map(
              (usuario) =>
                `<option value="${usuario.id}" ${
                  tarefa.usuario === usuario.id ? "selected" : ""
                }>${usuario.nome}</option>`
            )}
        </select>
        <button type="submit">Salvar</button>
    </form>`;

  const editarTarefa = document.getElementById("editarTarefa");
  editarTarefa.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados = {
      prioridade: editarTarefa.prioridade.value.toLowerCase(), 
      descricao: editarTarefa.descricao.value,
      status: editarTarefa.status.value.replace("_", " ").toLowerCase(), 
      usuarioId: Number(editarTarefa.usuario.value),
    };
    
    fetch(uri + "tarefas", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    })
      .then((resp) => resp.status)
      .then((status) => {
        if (status === 200) {
          alert("Tarefa atualizada com sucesso!");
          listarTarefas();
        } 
      })
      .catch((error) => console.error("Erro na requisição:", error));
  });
}

// Excluir tarefa
function excluirTarefa(id) {
    if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
        fetch(uri + `tarefas/${id}`, {
          method: "DELETE",
        })
          .then((resp) => resp.json())
          .then((res) => {
            if (res.error) {
              alert(`Erro ao excluir tarefa: ${res.error}`);
            } else {
              alert("Tarefa excluída com sucesso!");
              listarTarefas();
            }
          })
          .catch((error) => console.error("Erro na requisição:", error));
      }
    }