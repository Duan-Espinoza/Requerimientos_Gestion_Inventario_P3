// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import ManageUsers from './components/ManageUsers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product" element={<EditProduct />} />
        <Route path="/admin/delete-product" element={<DeleteProduct />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        {/* Otras rutas como '/catalogo' */}
      </Routes>
    </Router>
  );
}

export default App;
