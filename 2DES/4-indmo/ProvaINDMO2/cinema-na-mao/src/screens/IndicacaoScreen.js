import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

const IndicacaoScreen = () => {
  const indicacoes = [
    'Filme 1',
    'Filme 2',
    'Filme 3',
    'Filme 4',
    'Filme 5'
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Filmes que Indico</h1>
      {indicacoes.map((filme, index) => (
        <p key={index} style={styles.filme}>{filme}</p>
      ))}
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
    minHeight: '100vh',  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filme: {
    fontSize: 18,
    margin:'4px 0',
  },
};

export default IndicacaoScreen;