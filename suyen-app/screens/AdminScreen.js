import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AdminProductCard from '../components/AdminProductCard';
import AdminUserCard from '../components/AdminUserCard';
import AddProductModal from '../components/AddProductModal';
import AddUserModal from '../components/AddUserModal';


import { users } from '../users';
import { products } from '../products';

const AdminScreen = () => {
  const [productsData, setProductsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    setProductsData(products);
    setUsersData(users);
  }, []);

  // Funciones para manejar productos
  const handleAddProduct = (newProduct) => {
    // Simulación de agregar un producto al backend
    const newId = Math.max(...productsData.map(p => p.id)) + 1;
    setProductsData(prevProducts => [...prevProducts, { ...newProduct, id: newId }]);
    setShowAddProductModal(false);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowAddProductModal(true); // Reutilizamos el modal para editar
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProductsData(prevProducts => prevProducts.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setShowAddProductModal(false);
  };

  const handleDeleteProduct = (product) => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que quieres eliminar este producto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            // Simulación de eliminar un producto del backend
            setProductsData(prevProducts => prevProducts.filter(p => p.id !== product.id));
          },
        },
      ]
    );
  };

  // Funciones para manejar usuarios
  const handleAddUser = (newUser) => {
    const newId = Math.max(...usersData.map(u => u.id)) + 1;
    setUsersData(prevUsers => [...prevUsers, { ...newUser, id: newId }]);
    setShowAddUserModal(false);
  };

  const handleEditUser = (user) => {
    setUserToEdit(user);
    setShowAddUserModal(true); // Reutilizamos el modal para editar
  };

  const handleUpdateUser = (updatedUser) => {
    setUsersData(prevUsers => prevUsers.map(u => u.id === updatedUser.id ? updatedUser : u));
    setShowAddUserModal(false);
  };

  const handleDeleteUser = (user) => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que quieres eliminar este usuario?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setUsersData(prevUsers => prevUsers.filter(u => u.id !== user.id));
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Sección de Productos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos</Text>
        <TouchableOpacity onPress={() => setShowAddProductModal(true)} style={styles.addButton}>
          <Text style={styles.buttonText}>Agregar Producto</Text>
        </TouchableOpacity>
        {productsData.map((product) => (
          <AdminProductCard
            key={product.id}
            product={product}
            onEdit={() => handleEditProduct(product)}
            onDelete={() => handleDeleteProduct(product)}
          />
        ))}
      </View>

      {/* Sección de Usuarios */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Usuarios</Text>
        <TouchableOpacity onPress={() => setShowAddUserModal(true)} style={styles.addButton}>
          <Text style={styles.buttonText}>Agregar Usuario</Text>
        </TouchableOpacity>
        {usersData.map((user) => (
          <AdminUserCard
            key={user.id}
            user={user}
            onEdit={() => handleEditUser(user)}
            onDelete={() => handleDeleteUser(user)}
          />
        ))}
      </View>

      {/* Modales */}

      <AddProductModal
        isVisible={showAddProductModal}
        onClose={() => setShowAddProductModal(false)}
        onAddProduct={handleAddProduct}
        productToEdit={productToEdit} // Pasamos el producto a editar (si existe)
        onUpdateProduct={handleUpdateProduct}
      />
      <AddUserModal
        isVisible={showAddUserModal}
        onClose={() => setShowAddUserModal(false)}
        onAddUser={handleAddUser}
        userToEdit={userToEdit} // Pasamos el usuario a editar (si existe)
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50', // Verde
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AdminScreen;
