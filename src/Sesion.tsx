import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { useUser } from './context/UserContext';

const Menu = () => {
  const { username, password } = useUser();

  return (
    <View style={styles.container}>
      {/* Fondo inmovible */}
      <ImageBackground 
        source={require('../assets/images/background2.jpeg')} // Reemplaza con tu imagen de fondo
        style={styles.background}
      />

      {/* Header con logo */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/logo.png')} // Cambia la ruta por tu logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Contenido del menú */}
      <View style={styles.content}>
        <Text style={styles.text}>Bienvenido, {username}!</Text>
        <Text style={styles.text}>Tu contraseña es: {password}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: -50,
    left: -111,
    right: 0,
    width: '106%',
    height: '104.5%',
    resizeMode: 'cover',
  },
  header: {
    top: -20,
    right: -30,
    width: '100%',
    height: 0, // Altura del header
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Espaciado superior
  },
  logo: {
    width: 150, // Ajusta el tamaño del logo
    height: 80,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Menu;
