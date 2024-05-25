import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import CarScreen from "./screens/CarScreen";
import SettingsScreen from "./screens/AccountScreen";
import StackScreen from "./screens/StackScreen";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import OrderScreen from "./screens/OrderScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator()

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStackNavigator.Screen name="Stack" component={StackScreen}
            options={{
                headerTitleAlign: "center"
            }} />
        </HomeStackNavigator.Navigator>
    )
        

    
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "purple"
            }}
            >
            <Tab.Screen name="Home" component={MyStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="store" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Carrito" component={CarScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
                    ),
                    tabBarBadge: 4, //Esta leva para ver articulos en el carrito
                }}
            />
            <Tab.Screen name="Pedidos" component={OrderScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="package-variant-closed" size={24} color="black" />),
                }}
            />
            <Tab.Screen name="Cuenta" component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color,size}) => (
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