import React, { useState } from 'react';

const Busca = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=8ad25d0e`);
    const data = await response.json();
        if (data.Search) {
            const moviePromises = data.Search.map(movie =>
              fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=8ad25d0e`).then(response => response.json())
            );
            const detailedMovies = await Promise.all(moviePromises);
            setResults(detailedMovies);
        } else {
            setResults([]);
        }
    };


 
    const containerStyle = {
      padding: '10px',
      textAlign: 'center',
      backgroundImage: 'url("https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-3.jpg")',
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat', 
      minHeight: '100vh',
      display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const headingStyle = {
      color: '#FFD700',
      marginBottom: '20px',
      fontSize: '2.5em'
  };

  const formStyle = {
      marginBottom: '80px',
      width: '50%', 
  };

  const inputStyle = {
      padding: '20px',
      width: '70%',
      marginRight: '10px',
      borderRadius: '5px',
      border: 'none',
      fontSize: '14px',
      fontFamily: 'Roboto, sans-serif',
  };

  const buttonStyle = {
      padding: '20px',
      backgroundColor: '#FFD700',
      color: '#333',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      width: '100%',
      maxWidth: '100px',
      fontSize: '14px',
      fontFamily: 'Roboto, sans-serif',
  };

  const movieListStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
  };

  const movieItemStyle = {
      margin: '20px',
      padding: '20px',
      border: 'none',
      borderRadius: '10px',
      backgroundColor: '#9c3dc7',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      textAlign: 'left',
      fontFamily: 'Roboto, sans-serif',
  };

  const imageStyle = {
      width: '100%',
      height: 'auto',
      borderRadius: '10px'
  };

  const titleStyle = {
      fontSize: '1.5em',
      margin: '10px 0',
      color: '#FFD700',
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif',
  };

  const yearStyle = {
      fontSize: '1em',
      color: '#ccc',
      textAlign: 'center',
  };

  const plotStyle = {
      fontSize: '0.9em',
      color: '#ccc',
      textAlign: 'center',
  };

  return (
      <div style={containerStyle}>
          <h1 style={headingStyle}>Busque seu Filme Favorito!!!</h1>
          <form onSubmit={handleSearch} style={formStyle}>
              <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar filmes..."
                  style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>Buscar</button>
          </form>
          <div style={movieListStyle}>
              {results.map(movie => (
                  <div key={movie.imdbID} style={movieItemStyle}>
                      <img src={movie.Poster} alt={movie.Title} style={imageStyle} />
                      <h2 style={titleStyle}>{movie.Title}</h2>
                      <p style={plotStyle}>{movie.Plot}</p>
                      <p style={yearStyle}>{movie.Year}</p>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Busca;