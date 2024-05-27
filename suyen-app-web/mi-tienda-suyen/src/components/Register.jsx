import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente'); // Valor por defecto: cliente
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      //uso de localStorage para usuarios
      // Obtener usuarios de localStorage o inicializar como un array vacío si no existe
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Verificar si el email ya está registrado
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        setError('Este email ya está registrado');
        return;
      }

      // Agregar el nuevo usuario al array de usuarios
      const newUser = { email, password, role };
      users.push(newUser);

      // Guardar el array actualizado en localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Redirigir al usuario después del registro
      navigate('/');
    } catch (error) {
      setError('Error al registrar el usuario');
    }
  };

  return (
    <div className="container">
      <h2>Registrarse</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Rol:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="cliente">Cliente</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
