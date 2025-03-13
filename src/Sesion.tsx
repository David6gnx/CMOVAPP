import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sesion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 Pantalla de Sesión</Text>
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

export default Sesion;
