import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Destaques from './pages/Destaques';
import Busca from './pages/Busca';
import Indicacao from './pages/Indicacao';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/destaques" element={<Destaques />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/indicacao" element={<Indicacao />} />
          <Route path="/contato" element={<Contato />} />
         </Routes>
         <Navbar />
      </div>
    </Router>
  );
}

export default App;

