import * as React from "react";
import { FlatList, Text, View } from "react-native";
import CartCard from "./CartCard";
import { CartContext } from '../CartContext';
import { products } from "../products";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProductsCartList() {
  const { cart, calculateSubtotal } = React.useContext(CartContext);
  const shippingCost = 28;
  const total = calculateSubtotal + shippingCost;

  // Verifica el contenido del carrito
  console.log("Carrito:", cart);

  // Verifica si el carrito está vacío o no definido
  if (!cart || cart.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>El carrito está vacío</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={cart}
      keyExtractor={(item) => {
        if (item && item.id) {
          return item.id.toString();
        }
        console.log(products)
        console.error("Item sin id:", item);
        return Math.random().toString(); // Proporciona una clave temporal en caso de error
      }}
      renderItem={({ item }) => {
        if (!item) {
          return null;
        }
        return <CartCard {...item} />;
      }}
      ListFooterComponent={() => (
        <View style={{ height: 190 }}>
<View className="flex flex-col m-4" >
  <View className="flex flex-row justify-between items-center pb-2 mb-1">
    <View className="flex flex-col">
      <Text>Subtotal</Text>
      <Text>Envío</Text>
    </View>
    <View className="flex flex-col">
      <Text className="text-right">₡ {calculateSubtotal.toFixed(2)}</Text>
      <Text className="text-right">₡ {shippingCost}</Text>
    </View>
  </View>
  <View className="flex-row justify-between items-center border-t border-gray-300 pt-2 mt-2">
    <Text>Total</Text>
    <Text>₡ {total.toFixed(2)}</Text>
  </View>
</View>
          
          <TouchableOpacity className="bg-black p-3 rounded-full flex-row justify-center w-10/12 self-center m-5">
            <Text className="text-white font-bold" >Procesar pago</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}