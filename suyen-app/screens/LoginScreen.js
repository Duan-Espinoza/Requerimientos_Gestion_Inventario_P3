import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from "react-native";
import IconTextInput from '../components/IconTextInput';

const LogiScreen = () => {
    return (
        <SafeAreaView className="mx-6">
            <Text className="font-bold text-5xl self-center mt-24">Suyen</Text>
            <Text className="self-center py-10 text-xl">Inicia sesión</Text>
            <View className="mb-6">
                <IconTextInput
                    icon="email-outline"
                    placeholder="Correo electrónico"
                />
            </View>
            <View className="">
                <IconTextInput
                    icon="lock-outline"
                    placeholder="Contraseña"
                />
            </View>
            <View className="my-10 ">
                <TouchableOpacity className="bg-black rounded-xl py-3 px-4">
                    <Text className="text-white self-center text-base font-medium">Iniciar</Text>
                    {/* <MaterialCommunityIcons name="arrow-right" size={24} color="white" /> */}
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                <Text className="mx-2 text-lg font-light">¿No tienes cuenta?</Text>
                <Text className="underline text-lg">Crear</Text>
            </View>
        </SafeAreaView>
    );
}

export default LogiScreen;