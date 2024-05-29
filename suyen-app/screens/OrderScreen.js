import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { OrderContext } from '../OrderContext';

const OrderScreen = () => {
    const { orders } = useContext(OrderContext);

    const renderOrderItem = ({ item }) => (
        <View className="m-4 bg-slate-300 rounded-2xl p-4 w-11/12 sm:w-2/5 self-center">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-gray-700">Realizado</Text>
                    <Text className="text-gray-700">Pedido</Text>
                    <Text className="text-gray-700">Contiene</Text>
                    <Text className="text-gray-700">Total</Text>
                    <Text className="text-gray-700">Estado</Text>
                </View>
                <View className="pl-6">
                    <Text className="font-bold">26/05/2024</Text>
                    <Text className="font-bold">000001</Text>
                    <Text className="font-bold">{item.articulos} artículos</Text>
                    <Text className="font-bold">₡ {item.total}</Text>
                    <Text className="font-bold">En reparto</Text>
                </View>
            </View>
            {/* <TouchableOpacity className="bg-black p-2 rounded-full flex-row justify-center mt-4">
                <Text className="text-white font-bold">Ver detalle</Text>
            </TouchableOpacity> */}
        </View>
    );

    return (
        <SafeAreaView className="flex-1 p-5">
            <Text className="text-2xl font-bold mb-4">Lista de Pedidos</Text>
            {orders.length === 0 ? (
                <Text className="text-center">No hay pedidos realizados.</Text>
            ) : (
                <FlatList
                    data={orders}
                    renderItem={renderOrderItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            )}
        </SafeAreaView>
    );
};

export default OrderScreen;