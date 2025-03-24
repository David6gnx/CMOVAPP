import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Ajustes = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
              source={require('../assets/images/background2.jpeg')}
              style={styles.background}
            />
      <Text style={styles.text}>🗺️ Pantalla de Noticias</Text>
    </View>
    
  );
};


const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    bottom: 13,
    left: -149,
    width: '110%',
    height: '104%',
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

export default Ajustes;
