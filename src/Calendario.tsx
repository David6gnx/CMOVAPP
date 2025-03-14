import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Calendario = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
              source={require('../assets/images/background2.jpeg')}
              style={styles.background}
            />
      <Text style={styles.text}>👤 Pantalla de Calendario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: -40,
    left: -109,
    right: 0,
    width: '106%',
    height: '104.5%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Calendario;
