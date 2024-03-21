// Array para armazenar os candidatos
let candidatos = [];

// Função para adicionar um novo candidato
function adicionarCandidato() {
  // Obter os valores dos campos nome e CPF
  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;

  // Verificar se os campos não estão vazios
  if (nome !== "" && cpf !== "") {
    // Adicionar o candidato ao array
    candidatos.push({ nome: nome, cpf: cpf });

     // Limpar os campos de entrada
     document.getElementById("nome").value = "";
     document.getElementById("cpf").value = "";

      // Exibir a lista atualizada de candidatos
    exibirCandidatos();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função para exibir a lista de candidatos na tabela
function exibirCandidatos() {
  let tabelaCorpo = document.getElementById("resultado");
  tabelaCorpo.innerHTML = "";

  // Percorrer o array de candidatos e adicionar linhas à tabela
  candidatos.forEach((candidato) => {
    let linha = `<tr><td>${candidato.nome}</td><td>${candidato.cpf}</td></tr>`;
    tabelaCorpo.innerHTML += linha;
  });
}

// // Adicionar os exemplos de entrada à lista de candidatos
// adicionarCandidato("Maria", "123");
// adicionarCandidato("Juliana", "4564");
// adicionarCandidato("Ana", "454654");
// adicionarCandidato("Bruna", "25");

// // Exibir os candidatos ao carregar a página
// exibirCandidatos();

// Função para ordenar os candidatos
function ordenar() {
  // Obter o critério de ordenação selecionado pelo usuário
  let criterio = document.getElementById("ordenacao").value;

  // Ordenar os candidatos com base no critério selecionado
  switch (criterio) {
    case "nomeCrescente":
      candidatos.sort((a, b) => a.nome.localeCompare(b.nome));
      break;
    case "nomeDecrescente":
      candidatos.sort((a, b) => b.nome.localeCompare(a.nome));
      break;
    case "cpfCrescente":
      candidatos.sort((a, b) => a.cpf - b.cpf);
      break;
    case "cpfDecrescente":
      candidatos.sort((a, b) => b.cpf - a.cpf);
      break;
    default:
      break;
  }

  // Exibir a lista ordenada de candidatos
  exibirCandidatos();
}
