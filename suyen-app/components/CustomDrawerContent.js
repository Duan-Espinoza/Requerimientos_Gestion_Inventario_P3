import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

const CustomDrawerContent = ({ navigation, setSelectedCategory }) => {

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Jeans"
        onPress={() => {
          setSelectedCategory("men's clothing");
          console.log("Drawer Selected category:", "men's clothing");
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Blusas"
        onPress={() => {
          setSelectedCategory("jewelery");
          console.log("Drawer Selected category:", "jewelery");
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Calzados"
        onPress={() => {
          setSelectedCategory("electronics");
          console.log("Drawer Selected category:", "electronics");
          navigation.closeDrawer();
        }}
      />
      {/* Otros elementos del menú */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
