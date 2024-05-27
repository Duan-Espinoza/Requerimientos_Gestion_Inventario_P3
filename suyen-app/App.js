
import React from "react";
import Navigation from "./Navigation";
import { CartProvider } from './CartContext';
import { OrderProvider } from './OrderContext';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <CartProvider>
        <OrderProvider>
          <Navigation/>
        </OrderProvider>
    </CartProvider>
  );
}


