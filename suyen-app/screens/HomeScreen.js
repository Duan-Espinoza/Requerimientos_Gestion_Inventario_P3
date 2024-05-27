import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
//Icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
//Componentes
import ProductsList from "../components/ProductsList";


const HomeScreen = () => {
    return (
        <GestureHandlerRootView  >
            <SafeAreaView className="flex-1 mx-5">
                <ProductsList></ProductsList>
            </SafeAreaView>
            
        </GestureHandlerRootView>
    )
}

export default HomeScreen;