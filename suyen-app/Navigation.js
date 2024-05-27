import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CartContext } from "./CartContext";

//screens
import HomeScreen from "./screens/HomeScreen";
import CarScreen from "./screens/CarScreen";
import SettingsScreen from "./screens/AccountScreen";
import StackScreen from "./screens/StackScreen";
import OrderScreen from "./screens/OrderScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import PaymentScreen from "./screens/PaymentScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator();
const CarStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} 
            />
            <HomeStackNavigator.Screen name="Stack" component={StackScreen}
                options={{ headerTitleAlign: "center" }} />
            <HomeStackNavigator.Screen name="ProductDetail" component={ProductDetailScreen} />
        </HomeStackNavigator.Navigator>
    );
}

function CartStack() {
    return (
        <CarStackNavigator.Navigator initialRouteName="Car">
            <CarStackNavigator.Screen name="Car" component={CarScreen} />
            <CarStackNavigator.Screen name="Payment" component={PaymentScreen} />
        </CarStackNavigator.Navigator>
    );
}

function HomeDrawer() {
    return (
        <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen name="HomeStack" component={HomeStack} options={{ 
                    title: 'Suyen',
                    headerTitleAlign: 'center'
                }}  />
            <Drawer.Screen name="Pedidos" component={OrderScreen} options={{ title: 'Pedidos' }} />
            <Drawer.Screen name="Cuenta" component={SettingsScreen} options={{ title: 'Cuenta' }} />
        </Drawer.Navigator>
    );
}

function MyTabs() {
    const { getTotalItemsInCart } = useContext(CartContext);
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{ tabBarActiveTintColor: "purple" }}>
            <Tab.Screen name="Home" component={HomeDrawer}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="store" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Carrito" component={CartStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
                    ),
                    tabBarBadge: getTotalItemsInCart(),
                }}
            />
            <Tab.Screen name="Pedidos" component={OrderScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="package-variant-closed" size={24} color="black" />),
                }}
            />
            <Tab.Screen name="Cuenta" component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}