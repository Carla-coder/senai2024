import React, { useState } from 'react';
import axios from 'axios';

const BuscaScreen = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = () => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=8ad25d0e`)
      .then(response => {
        setMovies(response.data.Search || []);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Buscar filmes..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Buscar</button>
      <ul>
        {movies.map(item => (
          <li key={item.imdbID} style={styles.movie}>
            <h3 style={styles.movieTitle}>{item.Title}</h3>
            {item.Poster !== 'N/A' && (
              <img src={item.Poster} alt={item.Title} style={styles.poster} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: '40px',
    border: '1px solid gray',
    marginBottom: '16px',
    padding: '8px',
    width: '300px',
  },
  movie: {
    marginBottom: 16,
    listStyleType: 'none',
  },
  movieTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  poster: {
    width: '100px',
    height: '150px',
  },
};

export default BuscaScreen;
