import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AdminUserCard({ user, onEdit, onDelete }) {
  return (
    <TouchableOpacity onPress={onEdit} style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onDelete}>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // ... (Estilos similares a AdminProductCard, pero sin la imagen)
});
