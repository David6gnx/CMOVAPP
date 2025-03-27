import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';
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

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnim, {
      toValue: menuVisible ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const cambiarPantalla = (pantalla: string) => {
    setPantallaActual(pantalla);
    setMenuVisible(false);
    Animated.timing(menuAnim, {
      toValue: -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderizarPantalla = () => {
    switch (pantallaActual) {
      case 'SESION': return <Sesion />;
      case 'MAPA': return <Mapa />;
      case 'CALENDARIO': return <Calendario />;
      case 'NOTICIAS': return <Noticias />;
      case 'COMUNIDAD': return <Comunidad />;
      case 'AJUSTES': return <Ajustes />;
      default:
    }
  };

  return (
    <ImageBackground source={require('../assets/images/bgmenu.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style={styles.buttonText}>☰ Menú</Text>
        </TouchableOpacity>

        <Animated.View style={[styles.menu, { transform: [{ translateX: menuAnim }] }]}>
          {['SESION', 'MAPA', 'CALENDARIO', 'NOTICIAS', 'COMUNIDAD', 'AJUSTES'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={() => cambiarPantalla(item)}>
              <Text style={styles.menuItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>

        <View style={styles.content}>{renderizarPantalla()}</View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: '#c6d436',
    borderRadius: 5,
    zIndex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  menu: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 170,
    backgroundColor: '#2c2b70',
    borderRadius: 5,
    height: '100%',
    paddingTop: 0,
    zIndex: 10,
  },
  menuItem: {
    padding: 25,
    borderBottomWidth: 6,
    borderBottomColor: '#c6d436',
  },
  menuItemText: {
    fontSize: 16,
    color: '#c6d436',
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
    color: '#333',
  },
});

export default Menu;