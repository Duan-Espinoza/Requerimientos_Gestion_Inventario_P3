import React, {useEffect, useState, searchQuery, setFilteredProducts} from "react";
import { FlatList,View, Text,TextInput, useWindowDimensions, LogBox } from "react-native";
import { products } from "../products";
;
// Componente
import ProductCard from "./ProductCard";

import { styled } from "nativewind";
import { ScrollView } from "react-native-gesture-handler";

const StyledView = styled(View);

const minCols = 2;

const calcNumColumns = (width) => {
  const cols = width / 180;
  const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
  const colsMinusMargin = cols - 2 * colsFloor * 2; // 2 es el margen actual de ProdctCard
  if (colsMinusMargin < colsFloor && colsFloor > minCols) return colsFloor - 1; 
  else return colsFloor;
};

const renderItem = ({ item, index }) => {
  if (item.empty) {
    // Elemento "vacío" con el mismo estilo que el ProductCard
    return <StyledView className="flex-1 w-1/2 p-2 bg-transparent rounded-2xl m-2"/>;
  }
  return (
    <ProductCard {...item} />
  );
};

const formatData = (data, numColumns) => {
  const amountFullRows = Math.floor(data.length / numColumns);
  let amountItemsLastRow = data.length - amountFullRows * numColumns;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
    data.push({id: `empty-${amountItemsLastRow}`, empty: true});
    amountItemsLastRow++;
  }
  return data;
};


export default function ProductsList() {
  const {width} = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));

  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])

  useEffect(() => {
    setNumColumns(calcNumColumns(width));
  }, [width]);
  
  return ( 
        <ScrollView >
          <TextInput className="px-4 my-2  py-2 sm:my-6  sm:py-4 border border-gray-300 rounded-xl mb-2 "
          placeholder="Buscar producto..."
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          />
        
        <FlatList 

        showsVerticalScrollIndicator={false}
        key={numColumns}
        data={formatData(filteredProducts, numColumns)}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={renderItem}
      />
      </ScrollView>
  );
}