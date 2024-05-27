import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import IconTextInput from '../components/IconTextInput';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.replace('Main');
    };

    const handleCreateAccount = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView className="mx-6">
            <Text className="font-bold text-5xl self-center mt-32">Suyen</Text>
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
            <View className="my-10">
                <TouchableOpacity
                    className="bg-black rounded-xl py-3 px-4"
                    onPress={handleLogin}
                >
                    <Text className="text-white self-center text-base font-medium">Iniciar</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                <Text className="mx-2 text-lg font-light">¿No tienes cuenta?</Text>
                <Pressable onPress={handleCreateAccount}>
                    <Text className="underline text-lg">Crear</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
