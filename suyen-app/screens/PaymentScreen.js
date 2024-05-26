import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from "react-native";

export default function PaymentScreen() {
    return (
        <View>
            <View className="mx-2 my-10 p-2 bg-slate-300 rounded-2xl">
                <Text>Número de tarjeta</Text>
                    <TextInput className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300 "
                            placeholder="0000 0000 0000 0000"
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                <Text>Titular de la tarjeta</Text>
                <TextInput className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300 "
                            placeholder="Nombre"
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text>Expiry date</Text>
                        <TextInput className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300 "
                                placeholder="MM / YYYY"
                                clearButtonMode="always"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                    </View>
                    <View>
                        <Text>CVV</Text>
                        <TextInput className="px-4 py-2 border border-black rounded-xl mb-2 bg-gray-300 "
                                placeholder="3 digitos"
                                clearButtonMode="always"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                    </View>
                </View>
                <TouchableOpacity className="bg-black p-3 rounded-full flex-row justify-center w-10/12 self-center m-5">
                    <Text className="text-white font-bold" >Procesar pago</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}