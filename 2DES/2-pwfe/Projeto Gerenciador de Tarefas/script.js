// Obtém o modal
var modal = document.getElementById("modal");

// Obtém o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Lidar com a submissão do formulário
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede a submissão padrão do formulário
    
    // Obter dados do formulário
    var descricao = document.getElementById("descricao").value;
    var dataVencimento = document.getElementById("dataVencimento").value;
    var status = document.getElementById("status").value;
    
    // Aqui você pode adicionar código para salvar os dados da tarefa, por exemplo, usando AJAX para enviá-los para o servidor
    
    // Fechar o modal
    modal.style.display = "none";
});

