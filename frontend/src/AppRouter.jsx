import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Produtos from './pages/produtos';
import Servicos from './pages/servicos';
import Novidades from './pages/novidades';
import Atendimento from './pages/atendimento';
import Sobre from './pages/sobre';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
