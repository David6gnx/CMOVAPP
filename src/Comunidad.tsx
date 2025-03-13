import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comunidad = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 Pantalla de Comunidad</Text>
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

export default Comunidad;
