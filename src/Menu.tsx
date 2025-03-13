import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Sesion from '../src/Sesion';
import Mapa from '../src/Mapa';
import Calendario from '../src/Calendario';
import Noticias from '../src/Noticias';
import Comunidad from '../src/Comunidad';
import Ajustes from '../src/Ajustes';

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnim = useState(new Animated.Value(-250))[0]; // Estado de animación para el menú
  const [pantallaActual, setPantallaActual] = useState('MENU'); // Estado de la pantalla actual

  // Función para mostrar/ocultar el menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnim, {
      toValue: menuVisible ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Función para cambiar de pantalla
  const cambiarPantalla = (pantalla: string) => {
    setPantallaActual(pantalla);
    setMenuVisible(false);
  };

  // Renderizar la pantalla seleccionada
  const renderizarPantalla = () => {
    switch (pantallaActual) {
      case 'SESION': return <Sesion />;
      case 'MAPA': return <Mapa />;
      case 'CALENDARIO': return <Calendario />;
      case 'NOTICIAS': return <Noticias />;
      case 'COMUNIDAD': return <Comunidad />;
      case 'AJUSTES': return <Ajustes />;
      default:
        return <Text style={styles.contentText}>🏠 Bienvenido al Menú</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Botón para abrir/cerrar menú */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.buttonText}>☰ Menú</Text>
      </TouchableOpacity>

      {/* Menú lateral con animación */}
      <Animated.View style={[styles.menu, { transform: [{ translateX: menuAnim }] }]}>
        {['SESION', 'MAPA', 'CALENDARIO', 'NOTICIAS', 'COMUNIDAD', 'AJUSTES'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => cambiarPantalla(item)}>
            <Text style={styles.menuItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      {/* Contenido de la pantalla seleccionada */}
      <View style={styles.content}>{renderizarPantalla()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
    top: 50,
    left: 0,
    width: 250,
    backgroundColor: '#2c2b70',
    borderRadius: 5,
    height: '100%',
    paddingTop: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Menu;
