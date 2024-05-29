import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CartContext } from "./CartContext";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CarScreen from "./screens/CarScreen";
import SettingsScreen from "./screens/AccountScreen";
import StackScreen from "./screens/StackScreen";
import OrderScreen from "./screens/OrderScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import PaymentScreen from "./screens/PaymentScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterLoginScreen from "./screens/RegisterLoginScreen"; // Agregar esta línea
import AdminScreen from "./screens/AdminScreen";

const HomeStackNavigator = createNativeStackNavigator();
const CarStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

function HomeStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{headerShown: false}}
            />
            <HomeStackNavigator.Screen 
                name="Stack" 
                component={StackScreen}
                options={{ headerTitleAlign: "center" }} 
            />
            <HomeStackNavigator.Screen 
                name="ProductDetail" 
                component={ProductDetailScreen} 
            />
        </HomeStackNavigator.Navigator>
    );
}

function CartStack() {
    return (
        <CarStackNavigator.Navigator initialRouteName="Car">
            <CarStackNavigator.Screen 
                name="Car" 
                component={CarScreen}
                options={{ headerShown: false }} 
            />
            <CarStackNavigator.Screen 
                name="Payment" 
                component={PaymentScreen} 
            />
        </CarStackNavigator.Navigator>
    );
}

function HomeDrawer() {
    return (
        <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen 
                name="HomeStack" 
                component={HomeStack} 
                options={{ 
                    title: 'Suyen',
                    headerTitleAlign: 'center'
                }} 
            />
            <Drawer.Screen 
                name="OrderStack" 
                component={OrderScreen} 
                options={{ title: 'Pedidos' }} 
            />
            <Drawer.Screen 
                name="AccountStack" 
                component={SettingsScreen} 
                options={{ title: 'Cuenta' }} 
            />
        </Drawer.Navigator>
    );
}

function MyTabs() {
    const { getTotalItemsInCart } = useContext(CartContext);
    return (
        <Tab.Navigator initialRouteName="HomeTab"
            screenOptions={{ tabBarActiveTintColor: "purple" }}>
            <Tab.Screen 
                name="HomeTab" 
                component={HomeDrawer}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="store" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen 
                name="CartTab" 
                component={CartStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
                    ),
                    tabBarBadge: getTotalItemsInCart(),
                }}
            />
            <Tab.Screen 
                name="OrderTab" 
                component={OrderScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="package-variant-closed" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen 
                name="AccountTab" 
                component={SettingsScreen}
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

function RootNavigation() {
    return (
        <RootStack.Navigator initialRouteName="Login">
            <RootStack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{ headerShown: false }} 
            />
            <RootStack.Screen 
                name="Register" 
                component={RegisterLoginScreen} 
                options={{ headerShown: false }} // Agregar esta línea
            />
            <RootStack.Screen 
                name="Main" 
                component={MyTabs} 
                options={{ headerShown: false,
                    
                 }} 
            />
            <RootStack.Screen 
                name="Admin" 
                component={AdminScreen} 
                options={{ headerShown: false }} 
            />
        </RootStack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    );
}
