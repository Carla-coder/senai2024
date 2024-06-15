import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#c9a6ff',
      color: '#fff',
      padding: '10px 0',
    },
    navItem: {
      textDecoration: 'none',
      color: '#6a0dad',
      fontWeight: 'bold',
      padding: '10px',
      fontSize: '16',
      fontFamily: 'Roboto, sans-serif',
    },
  };

  return (
    <div style={styles.navbar}>
      <NavLink to="/destaques" style={styles.navItem}>Destaques</NavLink>
      <NavLink to="/busca" style={styles.navItem}>Busca</NavLink>
      <NavLink to="/indicacao" style={styles.navItem}>Filmes em Alta</NavLink>
      <NavLink to="/contato" style={styles.navItem}>Quem Somos / Fale Conosco</NavLink>
    </div>
  );
}

export default Navbar;
