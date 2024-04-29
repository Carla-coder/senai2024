import React, { Component } from 'react';

import { Provider } from 'react-redux';

import './App.css';

import store from './store';

import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Provider store={store}>
          <Header />
          <Game />
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
