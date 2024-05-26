import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente'); // Valor por defecto: cliente
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/users.json');
      const users = await response.json();

      const newUser = { email, password, role };
      users.push(newUser);

      // Guardar el nuevo usuario en localStorage o contexto
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/');
    } catch (error) {
      setError('Error al registrar el usuario');
    }
  };

  return (
    <div className="register-container">
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
