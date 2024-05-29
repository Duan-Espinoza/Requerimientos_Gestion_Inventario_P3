import React, { useEffect, useState } from 'react';
import Header from './Header'; // Importa el componente Header
import { products } from './products'; // Importa tu archivo de productos

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Suponiendo que los productos se cargan desde el archivo JS
    setProductList(products);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Header /> {/* Agrega el componente Header */}
      <div className="flex-grow border border-red-500 pb-10 xs:px-2 sm:px-4 md:px-4 lg:px-8 xl:px-32">
        <h1 className="text-3xl font-bold text-center mt-8 mb-6">Catálogo de Productos</h1>
        <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border border-purple-500">
          {productList.map((product) => (
            <div key={product.id} className="relative border border-red-500 rounded-2xl p-4  bg-slate-300 flex flex-col">
              <img src={product.image} alt={product.category} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="mt-4 text-xl font-semibold">{product.category}</h2>
              <p className="mt-2 text-lg font-bold">${product.price}</p>
              <button className="absolute bottom-0 right-0 mt-4 px-4 py-2 bg-black text-white rounded-tl-2xl rounded-br-2xl hover:bg-slate-800 focus:outline-nonew-full">
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
