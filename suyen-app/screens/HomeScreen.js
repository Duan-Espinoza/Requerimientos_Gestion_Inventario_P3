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

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Suyen",
            headerTitleAlign: "center",
            headerTitleStyle: { fontSize: 34 },
            headerLeft: () => (
                <TouchableOpacity 
                onPress={() => navigation.navigate("Stack")}
                style = {{
                    backgroundColor: "#D8D8D8",
                    width: 33,
                    height: 33,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems:"center"
                }}
                >
                <MaterialCommunityIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
            ),
        });
        
    }, [navigation]);

    return (
        <GestureHandlerRootView >
            {/* <ScrollView >
                <SafeAreaView className="flex-1 mx-5 bg-gray" >
                    <TextInput className="px-4 py-2 border border-gray-300 rounded-xl"
                        placeholder="Buscar"
                        clearButtonMode="always"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </SafeAreaView> 
            </ScrollView> */}
            <SafeAreaView className="flex-1 mx-5">
                <ProductsList></ProductsList>
            </SafeAreaView>
            
        </GestureHandlerRootView>
    )
}

export default HomeScreen;