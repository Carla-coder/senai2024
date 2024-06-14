import React from 'react';

const DestaquesScreen = () => {
  const filmesDestaque = [
    {
      titulo: 'Filme 1',
      imagem: 'https://example.com/poster_filme1.jpg'
    },
    {
      titulo: 'Filme 2',
      imagem: 'https://example.com/poster_filme2.jpg'
    },
    {
      titulo: 'Filme 3',
      imagem: 'https://example.com/poster_filme3.jpg'
    }
   
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Destaques</h1>
      <div style={styles.filmesContainer}>
        {filmesDestaque.map((filme, index) => (
          <div key={index} style={styles.filme}>
            <h3>{filme.titulo}</h3>
            <img src={filme.imagem} alt={filme.titulo} style={styles.poster} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filmesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filme: {
    textAlign: 'center',
    margin: '0 16px',
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 8,
  },
};

export default DestaquesScreen;

