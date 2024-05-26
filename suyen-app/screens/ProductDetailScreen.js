import React from "react";
import { View, Text, Image, TouchableOpacity , TextComponent } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProductDetailScreen() {
  const route = useRoute();
  const { image, category, title, price, description } = route.params;
  const [count, setCount] = React.useState(1);
  return (
    
    <View className="flex-1 p-5">
      <Image source={{ uri: image }} className="h-80 w-full rounded-xl" />
      <Text className="mt-2">{category}</Text>
      <Text className="text-lg font-semibold mt-2">{title}</Text>
      <Text className="mt-2 text-justify">{description}</Text>
      <View className="flex-row justify-between items-center mt-2">
        <View className="flex-row gap-3 items-center">
            <MaterialCommunityIcons 
                name="minus-circle-outline" 
                size={24} 
                color="black"
                onPress={()=>setCount(count - 1)}
                />
            <Text className="text-xl">{count}</Text>
            <MaterialCommunityIcons 
                name="plus-circle-outline" 
                size={24} 
                color="black"
                onPress={()=>setCount(count + 1)}  />
        </View>
        <Text className="text-2xl font-extrabold ">₡ {price * count}</Text>
      </View>
      <TouchableOpacity className="bg-black p-3 rounded-full flex-row justify-center w-10/12 self-center mt-5" >
            <Text className="text-white font-bold">Añadir al carrito</Text>
        </TouchableOpacity>
    </View>
  );
}