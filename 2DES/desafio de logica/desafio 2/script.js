// Array para armazenar as respostas do aluno
let respostasAluno = [];

// Função para adicionar uma questão ao cartão de respostas
function adicionarQuestao(numero) {
  let questaoHTML = `
    <div class="questao">
      <label for="questao${numero}">Questão ${numero}:</label>
      <input type="text" id="questao${numero}" maxlength="1" pattern="[A-Ea-e]">
    </div>
  `;
  document.getElementById("cartao-respostas").insertAdjacentHTML('beforeend', questaoHTML);
}

// Função para validar as respostas do aluno
function validarRespostas() {
  // Zerar contadores de acertos e erros
  let acertos = 0;
  let erros = 0;

  // Obter as respostas do aluno
  respostasAluno = [];
  let inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    respostasAluno.push(input.value.toUpperCase());
  });

  // Comparar as respostas do aluno com o gabarito
  let gabarito = ['A', 'C', 'B', 'D', 'D', 'E', 'A', 'C', 'B', 'D'];
  for (let i = 0; i < gabarito.length; i++) {
    if (respostasAluno[i] === gabarito[i]) {
      acertos++;
    } else {
      erros++;
    }
  }

  // Exibir o resultado
  let resultadoHTML = `
    <p>Acertos: ${acertos}</p>
    <p>Erros: ${erros}</p>
  `;
  document.getElementById("resultado").innerHTML = resultadoHTML;
}

// Adicionar as questões ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  for (let i = 1; i <= 10; i++) {
    adicionarQuestao(i);
  }
});

