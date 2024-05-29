import React, {useState} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import IconTextInput from '../components/IconTextInput';
import { useNavigation } from '@react-navigation/native';
import { users } from '../users';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            if (user.role === 'admin') {
                navigation.replace('Admin'); // Navegar a la pantalla de administración
            } else {
                navigation.replace('Main'); // Navegar a la pantalla principal
            }
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
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
                    onChangeText={setEmail}
                />
            </View>
            <View className="">
                <IconTextInput
                    icon="lock-outline"
                    placeholder="Contraseña"
                    onChangeText={setPassword}
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
