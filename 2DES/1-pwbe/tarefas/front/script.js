
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o comportamento padrão de submit do formulário
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      // Aqui você pode enviar os dados para o backend para autenticação
      // Por exemplo, você pode usar fetch ou axios para enviar uma requisição POST para o servidor
      // Não se esqueça de adicionar o tratamento de resposta para lidar com a autenticação

        // Enviar os dados para o backend para autenticação
  fetch('/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, senha: senha })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro ao autenticar usuário');
    }
  })
  .then(data => {
    // Tratar a resposta do servidor
    console.log(data); // Aqui você pode fazer o que quiser com os dados de retorno
 
  if (data.success) {
    alert('Login bem-sucedido!');
    // Redirecionar para outra página, se necessário
  } else {
    alert('Usuário ou senha inválidos. Por favor, tente novamente.');
  }
})
  .catch(error => {
    console.error('Erro:', error);
  });
});
