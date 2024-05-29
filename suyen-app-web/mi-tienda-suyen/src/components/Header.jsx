import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-200">
      <div className="text-2xl font-bold">Suyen</div>
      <div className="flex-grow mx-4 mt-4 md:mt-0 flex items-center">
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" 
        />
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <button 
          type="button" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Carrito
        </button>
        <button 
          type="button" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Mis Pedidos
        </button>
        <button 
          type="button" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Cuenta
        </button>
      </div>
    </header>
  );
}

export default Header;

