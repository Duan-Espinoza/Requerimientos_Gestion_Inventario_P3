import * as React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({
    image,
    category,
    title,
    price,
    description
    
 }){
    const navigation = useNavigation();
    const [count, setCount] = React.useState(1);
    return (
        <View className="flex-1 w-1/2 p-2 bg-slate-300 rounded-2xl m-2" >
            <View className="rounded-2xl overflow-hidden">
                <Image source={{uri:image}} className="h-40 w-30"></Image>
            </View>
            <View className="mt-5">
                <Text>{category}</Text>
                <Text numberOfLines={1} className="text-lg font-semibold">{title}</Text>
                <Text className="text-2xl font-extrabold" >₡ {price}</Text>
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-sky-600 w-10 h-10 rounded-tl-2xl rounded-br-2xl flex items-center justify-center" 
                onPress={() =>
                    navigation.navigate("ProductDetail", {
                      image,
                      category,
                      title,
                      price,
                      description,
                    })
                  }
          
            >
                <MaterialCommunityIcons name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}