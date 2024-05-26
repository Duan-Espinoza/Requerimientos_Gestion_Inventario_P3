import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import { GestureHandlerRootView,  } from "react-native-gesture-handler";
import ProductsCartList from "../components/ProductsCartList";
import { useNavigation } from '@react-navigation/native';

const CarScreen = () => {
    return (
        <GestureHandlerRootView>
            <SafeAreaView className="flex-1 mx-5">
                <Text className="text-center mt-8 font-extrabold  text-xl">Carrito de compras</Text>
            <ProductsCartList/>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

export default CarScreen;