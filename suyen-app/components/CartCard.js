import * as React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContext } from '../CartContext';

export default function CartCard({
    id,
    image,
    category,
    title,
    price,
    description,
    quantity
    
}) {
    const { removeFromCart, incrementItemInCart,removeItemFromCartCompletely} = React.useContext(CartContext);
    return (
    <View className="flex-row m-2 bg-slate-300 rounded-2xl w-full sm:w-96 self-center">
        <View className="rounded-2xl overflow-hidden " >
            <Image source={{uri:image}} className="h-24 w-24"></Image>
        </View>
        <View className="m-4">
            <Text className="pl-1">{category}</Text>
            <Text className="font-bold pl-1">₡ {price}</Text>
            <View className="flex-row gap-3 items-center">
            <MaterialCommunityIcons 
                name="minus-circle-outline" 
                size={24} 
                color="black"
                onPress={()=>removeFromCart(id)}
                />
            <Text className="text-sm">{quantity}</Text>
            <MaterialCommunityIcons 
                name="plus-circle-outline" 
                size={24} 
                color="black"
                onPress={() => incrementItemInCart(id)}
                />
            </View>
        </View>
        <TouchableOpacity className="absolute top-7 right-4 bg-black w-10 h-10 rounded-2xl flex items-center justify-center "
        onPress={() => removeItemFromCartCompletely(id)}
        >
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="white" />
        </TouchableOpacity>
    </View>
   )

}