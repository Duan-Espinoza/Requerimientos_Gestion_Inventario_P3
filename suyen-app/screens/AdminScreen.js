import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const AdminScreen = () => {
    return (
        <SafeAreaView>
            <View className="mx-6">
                <Text className="font-bold text-5xl self-center mt-32">Admin Dashboard</Text>
                <Text className="self-center py-10 text-xl">Bienvenido, administrador</Text>
                {/* Agrega más contenido y funcionalidad aquí */}
            </View>
        </SafeAreaView>
    );
}

export default AdminScreen;