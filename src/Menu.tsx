import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnim = useState(new Animated.Value(-250))[0]; // Estado de animación para el menú (fuera de la pantalla)

  // Función para mostrar/ocultar el menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);

    // Animación para mover el menú
    Animated.timing(menuAnim, {
      toValue: menuVisible ? -250 : 0, // Se mueve a la derecha (0) o a la izquierda (-250)
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Botón en la esquina superior izquierda */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.buttonText}>☰ Menú</Text>
      </TouchableOpacity>

      {/* Menú con animación */}
      <Animated.View style={[styles.menu, { transform: [{ translateX: menuAnim }] }]}>
        {['SESION', 'MAPA', 'CALENDARIO', 'NOTICIAS', 'COMUNIDAD', 'AJUSTES', 'ALERTAR'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bienvenido al Menú</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Ajuste para espacio en la parte superior (donde está el botón)
    backgroundColor: '#ffff',
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    zIndex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  menu: {
    position: 'absolute',
    top: 50, // Posición del menú debajo del botón
    left: 0,
    width: 250, // Ancho del menú
    backgroundColor: '#2c2b70',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Sombra para dispositivos Android
    height: '100%', // Altura completa para el menú
    paddingTop: 20, // Espacio superior para los ítems
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#007bff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
  },
});

export default Menu;
