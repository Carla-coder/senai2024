import React, { useState } from 'react';
import './styles.css';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleRegister = (userData) => {
    setCurrentUser(userData);
  };

  const isUserLoggedIn = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === currentUser.email && user.password === currentUser.password);
  };

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