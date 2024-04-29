import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { CookiesProvider } from 'react-cookie';

ReactDOM.render(<App />, document.getElementById('root'));

export default function Root() {
    return (
      <CookiesProvider>
        <App />
      </CookiesProvider>
    );
  }
