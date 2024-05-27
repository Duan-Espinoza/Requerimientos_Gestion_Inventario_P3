import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from "react-native";
import IconTextInput from '../components/IconTextInput';

const AccountScreen = () => {
    return (
        <SafeAreaView className="mx-6">
            <Text className="font-bold text-5xl self-center mt-24">Suyen</Text>
            <Text className="self-center py-10 text-xl">Ingresa tus datos</Text>
            <View className="mb-4">
                <IconTextInput
                    icon="email-outline"
                    placeholder="Nombre completo"
                />
            </View>
            <View className="mb-4">
                <IconTextInput
                    icon="email-outline"
                    placeholder="Correo electrónico"
                />
            </View>
            <View className="mb-4">
                <IconTextInput
                    icon="lock-outline"
                    placeholder="Telefono"
                />
            </View>
            <View className="mb-4">
                <IconTextInput
                    icon="lock-outline"
                    placeholder="Contraseña"
                />
            </View>
            <View className="">
                <IconTextInput
                    icon="lock-outline"
                    placeholder="Confirmar contraseña"
                />
            </View>
            <View className="my-10 ">
                <TouchableOpacity className="bg-black rounded-xl py-3 px-4">
                    <Text className="text-white self-center text-base font-medium">Registrarse</Text>
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