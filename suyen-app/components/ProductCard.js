import * as React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { CartContext } from '../CartContext';

export default function ProductCard({
    id,
    image,
    category,
    title,
    price,
    description
    
 }){
    const route = useRoute();
    // const { id, image, category, title, price, description } = route.params;
    const { addToCart } = React.useContext(CartContext);
  
    const handleAddToCart = () => {
      addToCart({ id, image, category, title, price, description });
    };
  
    const navigation = useNavigation();
    return (
        <TouchableOpacity className="flex-1 w-1/2 p-2 bg-slate-300 rounded-2xl m-2" 
        onPress={() =>
            navigation.navigate("ProductDetail", {
              id,
              image,
              category,
              title,
              price,
              description,
            })
          }>
            <View className="rounded-2xl overflow-hidden">
                <Image source={{uri:image}} className="h-40 w-30"></Image>
            </View>
            <View className="mt-5">
                <Text>{category}</Text>
                <Text numberOfLines={1} className="text-lg font-semibold">{title}</Text>
                <Text className="text-2xl font-extrabold" >₡ {price}</Text>
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-black w-10 h-10 rounded-tl-2xl rounded-br-2xl flex items-center justify-center" 
            onPress={handleAddToCart}>
                <MaterialCommunityIcons name="plus" size={24} color="white" />
            </TouchableOpacity >
        </TouchableOpacity>
    )
}