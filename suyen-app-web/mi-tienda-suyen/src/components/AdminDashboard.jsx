// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import './styles.css';

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      setError('Todos los campos son obligatorios');
      return;
    }

    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', description: '' });
    setError('');
  };

  return (
    <div className="container">
      <h2>Panel de Administración</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="name">Nombre del Producto:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <h3>Lista de Productos</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> - {product.price} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
