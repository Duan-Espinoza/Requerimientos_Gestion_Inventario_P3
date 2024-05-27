import React from "react";
import { View, Text, Image, TouchableOpacity , TextComponent } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CartContext } from '../CartContext';

export default function ProductDetailScreen() {
  const route = useRoute();
  const { id, image, category, title, price, description } = route.params;
  const { addToCart } = React.useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, image, category, title, price, description });
  };

  return (
    
    <View className="flex-1 p-5">
        <Image source={{ uri: image }} className="h-80 w-full rounded-xl" />
        <Text className="mt-2">{category}</Text>
        <Text className="text-lg font-semibold mt-2">{title}</Text>
        <Text className="mt-2 text-justify">{description}</Text>
        <View className="flex-row justify-between items-center mt-2">
        <Text className="text-2xl font-extrabold ">₡ {price}</Text>
        </View>
        <TouchableOpacity className="bg-black p-3 rounded-full flex-row justify-center w-10/12 self-center mt-5" 
            onPress={handleAddToCart}
            >
            <Text className="text-white font-bold">Añadir al carrito</Text>
        </TouchableOpacity>
    </View>
  );
}