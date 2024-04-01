document.addEventListener('DOMContentLoaded', function () {
  // Selecionar o formulário de pesquisa de temperatura
  const formTemperatura = document.querySelector('#temperatura form');

  // Adicionar evento de envio ao formulário
  formTemperatura.addEventListener('submit', function (event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    // Obter o valor do campo de localização
    const inputLocal = document.querySelector('#temperatura input');
    const local = inputLocal.value;

    // Limpar o campo de entrada
    inputLocal.value = '';

    // Fazer solicitação à API de temperatura
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=e0800bb787cb97e908e0cd533766706d&units=metric`)
      .then(response => response.json())
      .then(data => {
        // Exibir a temperatura na página
        const temperaturaResultado = document.querySelector('#temperatura #temperaturaResultado');
        temperaturaResultado.innerHTML = `<p>A temperatura em ${local} é ${data.main.temp}°C.</p>`;
      })
      .catch(error => {
        console.error('Erro ao obter temperatura:', error);
      });
  });

   // Selecionar o formulário de contato
   const formContato = document.querySelector('#modalContato form');

   // Adicionar evento de envio ao formulário de contato
   formContato.addEventListener('submit', function (event) {
     event.preventDefault(); // Impedir o envio padrão do formulário
 
     // Obter valores dos campos de contato
     const nome = document.querySelector('#inputNome').value;
     const email = document.querySelector('#inputEmail').value;
     const telefone = document.querySelector('#inputTelefone').value;
     const mensagem = document.querySelector('#inputMensagem').value;
 
     // Lógica para enviar os dados do contato (aqui você pode adicionar o código para enviar os dados para um servidor, por exemplo)
     console.log('Nome:', nome);
     console.log('Email:', email);
     console.log('Telefone:', telefone);
     console.log('Mensagem:', mensagem);
 
     // Limpar os campos do formulário
     formContato.reset();
 
     // Fechar o modal de contato
     $('#modalContato').modal('hide');
   });
 
   // Selecionar o formulário de adicionar tarefa
   const formTarefa = document.querySelector('#modalTarefa form');
 
   // Adicionar evento de envio ao formulário de adicionar tarefa
   formTarefa.addEventListener('submit', function (event) {
     event.preventDefault(); // Impedir o envio padrão do formulário
 
     // Obter valores dos campos da tarefa
     const nomeTarefa = document.querySelector('#inputNomeTarefa').value;
     const diaInicio = document.querySelector('#inputDiaInicio').value;
     const diaFim = document.querySelector('#inputDiaFim').value;
     const descricao = document.querySelector('#inputDescricao').value;
 
     // Lógica para salvar a tarefa (aqui você pode adicionar o código para salvar os dados em um banco de dados, por exemplo)
     console.log('Nome da Tarefa:', nomeTarefa);
     console.log('Dia de Início:', diaInicio);
     console.log('Dia do Fim:', diaFim);
     console.log('Descrição:', descricao);
 
     // Limpar os campos do formulário
     formTarefa.reset();
 
     // Fechar o modal de adicionar tarefa
     $('#modalTarefa').modal('hide');
   });
});

