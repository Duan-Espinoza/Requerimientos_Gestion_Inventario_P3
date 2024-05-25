import * as React from "react";
import { FlatList, Text } from "react-native";
import { products } from "../products";
// Componente
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return ( 
    <FlatList 
      data={products} 
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} />}
      numColumns={2} // Especificar el número de columnas 
      columnWrapperStyle={{ justifyContent: 'space-between' }} // Opcional: para espaciar las columnas
    />
  );
}