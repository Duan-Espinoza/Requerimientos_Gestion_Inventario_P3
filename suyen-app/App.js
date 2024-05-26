
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Navigation from "./Navigation";
import { CartProvider } from './CartContext';

export default function App() {
  return (
    <CartProvider>
        <Navigation/>
    </CartProvider>
  );
}


