import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AdminUserCard({ user, onEdit, onDelete }) {
  return (
    <TouchableOpacity onPress={onEdit} style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.role}>Rol: {user.role}</Text> {/* Mostrar el rol del usuario */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  role: { // Estilo para el rol del usuario
    fontSize: 14,
    color: 'blue', // O el color que prefieras
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteButton: { // Estilo para el botón de eliminar
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
});
