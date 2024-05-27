import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { OrderContext } from '../OrderContext';
import { CartContext } from '../CartContext';

export default function PaymentScreen() {
    const navigation = useNavigation(); // Obtiene el objeto de navegación
    const { addOrder } = useContext(OrderContext); // Accede a la función addOrder del contexto OrderContext
    const { cart, calculateSubtotal, getTotalItemsInCart, clearCart } = useContext(CartContext); // Accede a los valores del carrito del contexto CartContext

    const [orderInfo, setOrderInfo] = useState({
        name: "",
        address: "",
        phone: "",
        province: "",
        canton: "",
    });

    const handleInputChange = (field, value) => {
        setOrderInfo({
            ...orderInfo,
            [field]: value
        });
    };

    const handlePlaceOrder = () => {
        const subTotal = calculateSubtotal;
        const total = subTotal; // Asume que no hay impuestos ni costos adicionales
        const articulos = getTotalItemsInCart();

        const fullOrderInfo = {
            ...orderInfo,
            subTotal,
            total,
            articulos,
            cartItems: cart, // Almacena los artículos del carrito también si es necesario
        };

        console.log("Pedido realizado:", fullOrderInfo);
        // Guarda el pedido utilizando la función addOrder del contexto OrderContext
        addOrder(fullOrderInfo);
        // Limpia el carrito
        clearCart();
        // Navega a la pantalla de pedidos
        navigation.navigate('OrderTab');
        // Limpia el estado después de realizar el pedido
        setOrderInfo({
            name: "",
            address: "",
            phone: "",
            province: "",
            canton: "",
        });
        
        navigation.reset({
            index: 0,
            routes: [{ name: 'Car' }],
        });
    };

    return (
        <GestureHandlerRootView className="flex-1">
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <View>
                    <View className="mx-2 mb-4 mt-4 p-2 bg-slate-300 rounded-2xl">
                        <Text>Información de envio</Text>
                        <Text>Nombre</Text>
                        <TextInput
                            className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                            placeholder=""
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={orderInfo.name}
                            onChangeText={(text) => handleInputChange("name", text)}
                        />
                        <Text>Dirección</Text>
                        <TextInput
                            className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                            placeholder=""
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={orderInfo.address}
                            onChangeText={(text) => handleInputChange("address", text)}
                        />
                        <Text>Teléfono</Text>
                        <TextInput
                            className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                            placeholder=""
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={orderInfo.phone}
                            onChangeText={(text) => handleInputChange("phone", text)}
                        />
                        <View className="flex-row justify-between items-center">
                            <View className="flex-1 mr-2">
                                <Text>Provincia</Text>
                                <TextInput
                                    className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                                    placeholder=""
                                    clearButtonMode="always"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={orderInfo.province}
                                    onChangeText={(text) => handleInputChange("province", text)}
                                />
                            </View>
                            <View className="flex-1 ml-2">
                                <Text>Cantón</Text>
                                <TextInput
                                    className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                                    placeholder=""
                                    clearButtonMode="always"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={orderInfo.canton}
                                    onChangeText={(text) => handleInputChange("canton", text)}
                                />
                            </View>
                        </View>
                    </View>

                    <View className="mx-2 mb-4 p-2 bg-slate-300 rounded-2xl">
                        <Text>Agregar metodo de pago</Text>
                        <Text>Número de tarjeta</Text>
                        <TextInput
                            className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                            placeholder="0000 0000 0000 0000"
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Text>Titular de la tarjeta</Text>
                        <TextInput
                            className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                            placeholder="Nombre"
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <View className="flex-row justify-between items-center">
                            <View className="flex-1 mr-2">
                                <Text>Expiry date</Text>
                                <TextInput
                                    className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                                    placeholder="MM / YYYY"
                                    clearButtonMode="always"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </View>
                            <View className="flex-1 ml-2">
                                <Text>CVV</Text>
                                <TextInput
                                    className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300"
                                    placeholder="3 dígitos"
                                    clearButtonMode="always"
                                    autoCapitalize="none"
                                    autoCorrect={false}      
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity 
                        className="bg-black p-3 rounded-full flex-row justify-center w-10/12 self-center mx-5"
                        onPress={handlePlaceOrder}
                    >
                        <Text className="text-white font-bold">Realizar pedido</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}