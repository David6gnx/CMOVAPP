import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Mapa = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🗺️ Pantalla del Mapa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Mapa; // 🔥 Asegúrate de que estás exportando el componente correctamente
