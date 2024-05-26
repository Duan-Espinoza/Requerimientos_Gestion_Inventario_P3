import React, { createContext, useState, useMemo } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const incrementItemInCart = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  
  
  const removeItemFromCartCompletely = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const calculateSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItemsInCart, incrementItemInCart, removeItemFromCartCompletely, calculateSubtotal}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };