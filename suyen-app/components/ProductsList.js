import * as React from "react";
import { FlatList, Text,TextInput } from "react-native";
import { products } from "../products";
// Componente
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const [isScrolling, setIsScrolling] = React.useState(false);
  return ( 
    <FlatList 
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => ( 
        <TextInput className="px-4 py-2 border border-gray-300 rounded-xl mb-2 "
                        placeholder="Buscar"
                        clearButtonMode="always"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
      )}
      data={products} 
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} isScrolling={isScrolling}/>}
      numColumns={2} // Especificar el número de columnas 
      columnWrapperStyle={{ justifyContent: 'space-between' }} // Opcional: para espaciar las columnas
    />
  );
}