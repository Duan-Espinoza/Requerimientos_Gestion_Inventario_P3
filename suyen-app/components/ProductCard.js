import * as React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function ProductCard({
    image,
    category,
    title,
    price,
    description
 }){
    const [count, setCount] = React.useState(1);
    return (
        <View className="flex-1 w-1/2 p-2 bg-slate-300 rounded-2xl m-2" >
            <View className="rounded-2xl overflow-hidden">
                <Image source={{uri:image}} className="h-40 w-30"></Image>
            </View>
            <View className="mt-5">
                <Text numberOfLines={1} className="text-lg font-semibold">{title}</Text>
                <Text>{category}</Text>
                <Text className="text-2xl font-extrabold" >₡ {price}</Text>
            </View>
        </View>
    )
}