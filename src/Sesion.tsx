import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useUser } from './context/UserContext';

const Menu = () => {
  const { username, password } = useUser();

  // Simulación de la última fecha de inicio de sesión
  const now = new Date();
  const lastLoginDate = now.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const lastLoginTime = now.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const lastLogin = `${lastLoginDate} a las ${lastLoginTime}`;

  // Función de cierre de sesión (por ahora solo alerta)
  const handleLogout = () => {
    Alert.alert('Cierre de sesión', 'Has cerrado sesión correctamente.');
    console.log('Usuario cerró sesión');
    // Aquí puedes agregar la lógica real cuando la implementes (ej. eliminar token, navegar a login)
  };

  return (
    <View style={styles.container}>
      {/* Fondo inmovible */}
      <ImageBackground 
        source={require('../assets/images/background2.jpeg')}
        style={styles.background}
      />

      {/* Header con logo */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/logo3.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Contenido del menú */}
      <View style={styles.content}>
        {/* Icono de perfil */}
        <Image 
          source={require('../assets/images/logocma.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />

        {/* Texto de bienvenida y contraseña */}
        <Text style={styles.welcomeText}>Bienvenido, {username}!</Text>
        <Text style={styles.passwordText}>Tu contraseña es: {password}</Text>

        {/* Última sesión */}
        <Text style={styles.lastLoginText}>Última sesión: {lastLogin}</Text>

        {/* Botón de cierre de sesión */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
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
    bottom: 13,
    left: -115,
    width: '109%',
    height: '104%',
    resizeMode: 'cover',
  },
  header: {
    top: -20,
    right: -60,
    width: '100%',
    height: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 80,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0056b3',
    marginBottom: 5,
  },
  passwordText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ff5733',
    marginBottom: 10,
  },
  lastLoginText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#d9534f', // Rojo elegante
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Menu;
