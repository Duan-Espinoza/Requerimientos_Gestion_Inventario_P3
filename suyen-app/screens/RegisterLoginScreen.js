import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import IconTextInput from '../components/IconTextInput';
import { useNavigation } from '@react-navigation/native';

const RegisterLoginScreen = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.replace('Main');
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView className="mx-6 ">
            <Text className="font-bold text-5xl self-center mt-24">Suyen</Text>
            <Text className="self-center py-10 text-xl">Ingresa tus datos</Text>
            <View className="mb-4 w-full sm:w-96 self-center" >
                <IconTextInput
                    icon="account-outline"
                    placeholder="Nombre completo"
                />
            </View>
            <View className="mb-4 w-full sm:w-96 self-center">
                <IconTextInput
                    icon="email-outline"
                    placeholder="Correo electrónico"
                />
            </View>
            <View className="mb-4 w-full sm:w-96 self-center">
                <IconTextInput
                    icon="phone-outline"
                    placeholder="Teléfono"
                />
            </View>
            <View className="mb-4 w-full sm:w-96 self-center">
                <IconTextInput
                    icon="lock-outline"
                    placeholder="Contraseña"
                />
            </View>
            <View className="w-full sm:w-96 self-center">
                <IconTextInput
                    icon="lock-outline"
                    placeholder="Confirmar contraseña"
                />
            </View>
            <View className="my-10">
                <TouchableOpacity
                    className="bg-black rounded-xl py-3 px-4 w-full sm:w-96 self-center"
                    onPress={handleRegister}
                >
                    <Text className="text-white self-center text-base font-medium">Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                <Text className="mx-2 text-lg font-light">¿Ya tienes cuenta?</Text>
                <TouchableOpacity onPress={handleGoBack}>
                    <Text className="underline text-lg">Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default RegisterLoginScreen;
