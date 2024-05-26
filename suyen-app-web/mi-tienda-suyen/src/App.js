import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// Importa otros componentes de páginas cuando estén listos
// import Catalogo from './pages/Catalogo';
// import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Descomenta estas líneas cuando hayas creado los componentes correspondientes */}
        {/* <Route path="/catalogo" element={<Catalogo />} /> */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
