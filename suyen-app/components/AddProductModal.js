import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { categories } from '../categories'; // Asume que tienes un archivo categories.js

export default function AddProductModal({ isVisible, onClose, onAddProduct }) {
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
    image: null, // Para almacenar la imagen seleccionada
    category: categories[0], // Valor inicial de la categoría
  });

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProductData(prevData => ({ ...prevData, image: result.assets[0].uri }));
    }
  };

  const handleAddProduct = () => {
    onAddProduct(productData); // Llama a la función proporcionada para agregar el producto
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
      <ScrollView contentContainerStyle={styles.modalContainer}>
        <Text style={styles.modalTitle}>Agregar Producto</Text>

        <TouchableOpacity onPress={handleImagePicker} style={styles.imagePicker}>
          {productData.image ? (
            <Image source={{ uri: productData.image }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Seleccionar Imagen</Text>
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Nombre del producto"
          value={productData.title}
          onChangeText={(text) => handleInputChange('title', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          value={productData.price}
          onChangeText={(text) => handleInputChange('price', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={productData.description}
          onChangeText={(text) => handleInputChange('description', text)}
          multiline
        />

        <Picker
          selectedValue={productData.category}
          onValueChange={(itemValue) => handleInputChange('category', itemValue)}
          style={styles.picker}
        >
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>

        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flexGrow: 1, // Permite que el ScrollView se expanda para ajustarse al contenido
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
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePickerText: {
    color: 'blue',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
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
