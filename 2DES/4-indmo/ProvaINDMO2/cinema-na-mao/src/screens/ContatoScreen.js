import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


const ContatoScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contato / Quem somos</h1>
      <p style={styles.description}>
        Bem-vindo ao Cinema na Mão! Nosso aplicativo oferece as melhores indicações de filmes e uma busca fácil e rápida através da API OMDb. Explore nossos destaques e veja nossas indicações pessoais para ter uma experiência cinematográfica incrível!
      </p>
      <p style={styles.contact}>
        Contato: contato@cinemanamao.com
      </p>
    </div>
  );
};

const styles = {
  container: {
    // flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  contact: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default ContatoScreen;