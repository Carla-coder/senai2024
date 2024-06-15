import React, { useState } from 'react';

const styles = {
  contatoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundImage:
    'url("https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-3.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    borderRadius: '8px',
  },
  header: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2.5em',
    fontFamily: 'Roboto, sans-serif',
  },
  formContainer: {
    width: '80%',
    height: '50%', 
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    color: '#555',
    fontWeight: 'bold',
    textAlign: 'left', 
    display: 'block', 
    fontFamily: 'Roboto, sans-serif',
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center', 
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#9c3dc7',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: 'fit-content',
    margin: '0 auto',
    fontFamily: 'Roboto, sans-serif',
  },
  quemSomosContainer: {
    width: '80%',
    height: '50%', 
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '40px',
    overflow: 'auto', 
  },
  quemSomos: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
  },
  paragraph: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
};

const Contato = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado!');
  };

  return (
    <div style={styles.contatoContainer}>
      <div style={styles.quemSomosContainer}>
        <h1 style={styles.header}>Quem Somos</h1>
        <div style={styles.quemSomos}>
          <p style={styles.paragraph}>
            Bem-vindo ao <span style={{ fontWeight: 'bold' }}>Cinema na Mão</span>! Este aplicativo traz informações sobre lançamentos e destaques do cinema,
            e oferece indicações personalizadas. Entre em contato conosco para mais informações.
          </p>
          <p style={styles.paragraph}><span style={{ fontWeight: 'bold' }}>Nome:</span> Carla-coder</p>
          <p style={styles.paragraph}><span style={{ fontWeight: 'bold' }}>Email:</span> contato@cinemanamao.com</p>
          <p style={styles.paragraph}><span style={{ fontWeight: 'bold' }}>Telefone:</span> (11) 1234-5678 Jaguariúna-SP</p>
        </div>
      </div>
      <div style={styles.formContainer}>
        <h1 style={styles.header}>Contato</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="nome">Nome:</label>
          <input
            style={styles.input}
            type="text"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label style={styles.label} htmlFor="mensagem">Mensagem:</label>
          <textarea
            style={styles.textarea}
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows="5"
            required
          />
          <button style={styles.button} type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contato;

