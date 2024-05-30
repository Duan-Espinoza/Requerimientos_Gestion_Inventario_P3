import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        // Navegar a la pantalla de inicio de sesión y reemplazar la pila de navegación actual
        navigation.replace('Login');
    };

    return (
        <SafeAreaView className="mx-8">
            <Text className="text-center my-8 font-extrabold  text-xl">Mi perfil</Text>
            <View className="self-center">
                <MaterialCommunityIcons name="account-circle" size={100} color="black" />
            </View>  
            <View className="bg-slate-300 p-2 rounded-xl m-2 w-full sm:w-96 self-center">
                <Text>Nombre:</Text>
                <Text>Jefferson Pozo</Text>
            </View>
            <View className="bg-slate-300 p-2 rounded-xl m-2 w-full sm:w-96 self-center">
                <Text>Correo electrónico:</Text>
                <Text>jpozo@estudiantec.cr</Text>
            </View>
            <View className="bg-slate-300 p-2 rounded-xl m-2 w-full sm:w-96 self-center">
                <Text>Teléfono:</Text>
                <Text>84320063</Text>
            </View>
            <View className="my-10 ">
                <TouchableOpacity
                    className="bg-black rounded-xl py-2 px-4 mx-4 w-full sm:w-96 self-center"
                    onPress={handleLogout}
                >
                    <Text className="text-white self-center text-base font-medium">Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default AccountScreen;