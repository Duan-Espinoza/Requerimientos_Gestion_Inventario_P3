import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from 'react-native';


export default function AddUserModal({ isVisible, onClose, onAddUser }) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'customer', // Valor inicial del rol
  });

  const handleInputChange = (field, value) => {
    setUserData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleAddUser = () => {
    onAddUser(userData); // Llama a la función proporcionada para agregar el usuario
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
      <ScrollView contentContainerStyle={styles.modalContainer}>
        <Text style={styles.modalTitle}>Agregar Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={userData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={userData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={userData.password}
          onChangeText={(text) => handleInputChange('password', text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={userData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          keyboardType="phone-pad"
        />

        <Picker
          selectedValue={userData.role}
          onValueChange={(itemValue) => handleInputChange('role', itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Cliente" value="customer" />
          <Picker.Item label="Administrador" value="admin" />
        </Picker>

        <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flexGrow: 1,
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
