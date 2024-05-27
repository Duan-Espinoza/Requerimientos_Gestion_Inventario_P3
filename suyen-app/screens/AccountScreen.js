import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from "react-native";
import IconTextInput from '../components/IconTextInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = () => {
    return (
        <SafeAreaView className="mx-6">
            <Text className="self-center py-10 text-xl">Mi perfil</Text>
            <View className="self-center">
                <MaterialCommunityIcons  name="account-circle" size={100} color="black" />
            </View>  
            <View className="bg-slate-300 p-2 rounded-xl m-2">
                <Text>Nombre:</Text>
                <Text>Jefferson Pozo</Text>
            </View>
            <View className="bg-slate-300 p-2 rounded-xl m-2">
                <Text>Correo electronico:</Text>
                <Text>jpozo@estudiantec.cr</Text>
            </View>
            <View className="bg-slate-300 p-2 rounded-xl m-2">
                <Text>Telefono:</Text>
                <Text>84320063</Text>
            </View>

            <View className="my-10 ">
                <TouchableOpacity className="bg-black rounded-xl py-3 px-4 mx-4">
                    <Text className="text-white self-center text-base font-medium">Cerrar sesión</Text>
                    {/* <MaterialCommunityIcons name="arrow-right" size={24} color="white" /> */}
                </TouchableOpacity>
            </View>
            
            {/* <View className="flex-row justify-center">
                <Text className="mx-2 text-lg font-light">¿No tienes cuenta?</Text>
                <Text className="underline text-lg">Crear</Text>
            </View> */}
        </SafeAreaView>
    );
}

export default AccountScreen;