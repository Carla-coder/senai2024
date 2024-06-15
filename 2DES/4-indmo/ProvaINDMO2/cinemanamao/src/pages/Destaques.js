import React, { useEffect, useState } from "react";

const Destaques = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDestaques = async () => {
      try {
        const movieIDs = ["tt3896198", "tt2247732", "tt4154664"];
        const moviePromises = movieIDs.map((id) =>
          fetch(`http://www.omdbapi.com/?i=${id}&apikey=8ad25d0e`).then(
            (response) => response.json()
          )
        );

        const moviesData = await Promise.all(moviePromises);
        setMovies(moviesData);
      } catch (error) {
        console.error("Erro ao buscar destaques:", error);
      }
    };

    fetchDestaques();
  }, []);

  const containerStyle = {
    padding: "10px",
    textAlign: "center",
    backgroundImage:
      'url("https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-3.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  const headingStyle = {
    color: "#FFD700",
    marginBottom: "60px",
    fontSize: "2.5em",
    fontFamily: 'Roboto, sans-serif',
  };

  const movieListStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const movieItemStyle = {
    margin: "20px",
    padding: "20px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#9c3dc7",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "1.5em",
    margin: "10px 0",
    color: "#FFD700",
    fontFamily: 'Roboto, sans-serif',
  };

  const yearStyle = {
    fontSize: "1em",
    color: "#ccc",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Destaques do Mês</h1>
      <div style={movieListStyle}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={movieItemStyle}>
            <img src={movie.Poster} alt={movie.Title} style={imageStyle} />
            <h2 style={titleStyle}>{movie.Title}</h2>
            <p style={yearStyle}>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destaques;
