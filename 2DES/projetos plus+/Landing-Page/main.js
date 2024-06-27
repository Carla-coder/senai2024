function getProjects() {
  const urlGitHub = "https://api.github.com/users/Carla-coder/repos";
  var loadingElement = document.getElementById("loading");

  fetch(urlGitHub, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      showProjects(response);
      loadingElement.style.display = "none";
    })
    .catch((e) => {
      console.log(`Error -> ${e}`);
    });
}

function showProjects(data) {
  var listElement = document.getElementById("my-projects-list");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    let a = document.createElement("a");
    a.href = data[i]["clone_url"];
    a.target = "_blank";
    a.title = data[i]["description"];
    let linkText = document.createTextNode(data[i]["name"]);
    a.appendChild(linkText);
    div.appendChild(a);
    listElement.appendChild(div);
  }
}

getProjects();

// Funções para abrir e fechar modais
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Event listeners para os botões de abrir modais
document
  .querySelector(".btn-action:nth-child(1)")
  .addEventListener("click", () => openModal("modal-cadastrar"));
document
  .querySelector(".btn-action:nth-child(2)")
  .addEventListener("click", () => openModal("modal-entrar"));

// Event listeners para os botões de fechar modais
document
  .getElementById("close-cadastrar")
  .addEventListener("click", () => closeModal("modal-cadastrar"));
document
  .getElementById("close-entrar")
  .addEventListener("click", () => closeModal("modal-entrar"));

// Event listeners para submissão dos formulários
document
  .getElementById("form-cadastrar")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
    closeModal("modal-cadastrar");
  });

document.getElementById("form-entrar").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Login realizado com sucesso!");
  closeModal("modal-entrar");
});

// Mostrar ou ocultar o botão de rolar ao topo com base na rolagem da página
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Rolar a página para o topo quando o botão for clicado
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  });
