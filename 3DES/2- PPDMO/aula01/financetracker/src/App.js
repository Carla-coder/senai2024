import React, { useState } from 'react';
import './styles.css';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Função para verificar se o usuário está logado
  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  // Função para definir o usuário atual após o cadastro
  const handleRegister = (userData) => {
    setCurrentUser(userData);
  };

  // Verificar se o usuário já está logado com base no estado
  const isUserLoggedIn = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === currentUser.email && user.password === currentUser.password);
  };

  // Verificar se o usuário já está logado ao carregar a página
  if (!isLoggedIn && currentUser && isUserLoggedIn()) {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} onRegister={handleRegister} />
      ) : (
        <Home currentUser={currentUser} />
      )}
    </div>
  );
};

export default App;