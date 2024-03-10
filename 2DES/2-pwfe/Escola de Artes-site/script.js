document.addEventListener('DOMContentLoaded', function () {
  // Modais dos cursos
  var cursoModals = document.querySelectorAll('[data-bs-toggle="modal"]')
  cursoModals.forEach(function (modal) {
    modal.addEventListener('click', function () {
      var targetModalId = modal.getAttribute('data-bs-target')
      var targetModal = new bootstrap.Modal(
        document.querySelector(targetModalId)
      )
      targetModal.show()
    })
  })

  // Adiciona evento ao fechar o modal
  var modals = document.querySelectorAll('.modal')
  modals.forEach(function (modal) {
    modal.addEventListener('hidden.bs.modal', function () {
      document.body.classList.remove('modal-open')
      var modalBackdrops = document.getElementsByClassName('modal-backdrop')
      for (var i = 0; i < modalBackdrops.length; i++) {
        modalBackdrops[i].parentNode.removeChild(modalBackdrops[i])
      }
    })
  })

  // // Adiciona evento ao formulário de matrícula
  // var matriculaForm = document.querySelector('#matricula-form')
  // if (matriculaForm) {
  //   matriculaForm.addEventListener('submit', function (event) {
  //     event.preventDefault()
  //     processarMatriculaForm()
  //   })
  // }

//   // Função para processar o formulário de matrícula
//   function processarMatriculaForm () {
//     // Lógica para processar o formulário de matrícula
//     console.log('Formulário de matrícula enviado com sucesso!')
//     exibirMensagemDeSucesso(
//       'Formulário de matrícula enviado com sucesso!',
//       'success'
//     )
//   }

//   // Adiciona evento ao formulário de contato
//   var contatoForm = document.querySelector('#contato-form')
//   if (contatoForm) {
//     contatoForm.addEventListener('submit', function (event) {
//       event.preventDefault()
//       processarContatoForm()
//     })
//   }

//   // Função para processar o formulário de contato
//   function processarContatoForm () {
//     // Lógica para processar o formulário de contato
//     console.log('Formulário de contato enviado com sucesso!')
//     exibirMensagemDeSucesso(
//       'Formulário de contato enviado com sucesso!',
//       'success'
//     )
//   }

//   // Função para exibir mensagem na página
//   function exibirMensagemDeSucesso (mensagem, tipo) {
//     var mensagensDiv = document.getElementById('mensagens')
//     var mensagemElement = document.createElement('div')
//     mensagemElement.className = 'alert alert-' + tipo
//     mensagemElement.textContent = mensagem
//     mensagensDiv.appendChild(mensagemElement)
//   }
 })
