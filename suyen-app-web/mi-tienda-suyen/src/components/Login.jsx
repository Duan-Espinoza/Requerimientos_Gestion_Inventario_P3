import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay usuarios en localStorage al cargar el componente
    const users = JSON.parse(localStorage.getItem('users'));
    if (!users) {
      // Si no hay usuarios en localStorage, cargar desde users.json
      fetchUsersFromJson();
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  const fetchUsersFromJson = async () => {
    try {
      const response = await fetch('/users.json');
      const users = await response.json();
      localStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
      console.error('Error al cargar los datos de usuarios desde users.json:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Obtener los usuarios desde localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Buscar al usuario por email y contraseña
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        // Guardar el rol en localStorage
        localStorage.setItem('role', user.role);
        // Redirigir según el rol
        navigate(user.role === 'cliente' ? '/catalogo' : '/admin');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError('Error al cargar los datos de usuarios');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar Sesión</button>
        <p>
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
