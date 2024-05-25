import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
//Icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


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
            <ScrollView /* tus propiedades de ScrollView */>
                <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
                    <TextInput 
                        placeholder="Buscar"
                        clearButtonMode="always"
                        style={styles.searchBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </SafeAreaView>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 20

    }
})

export default HomeScreen;