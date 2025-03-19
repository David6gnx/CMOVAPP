import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useUser } from './context/UserContext'; // Importar el hook del contexto

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const { setUsername, setPassword } = useUser(); // Usar el contexto
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLogin = () => {
    if (inputUsername === 'cm253001' && inputPassword === '1234') {
      setUsername(inputUsername); // Guardar el username en el contexto
      setPassword(inputPassword); // Guardar la contraseña en el contexto
      onLoginSuccess();
    } else {
      Alert.alert('Mensaje', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <ImageBackground source={require('../assets/images/background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.image1} />
        <Image source={require('../assets/images/logo2.jpg')} style={styles.image2} />
        <Text style={styles.title}>Bienvenido</Text>
        <TextInput
          style={styles.input}
          placeholder="ID"
          placeholderTextColor="#ffffff"
          value={inputUsername}
          onChangeText={setInputUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={inputPassword}
          onChangeText={setInputPassword}
        />
        <Button title="Iniciar Sesión" onPress={handleLogin} />
        <Text style={styles.author}>Universidad Tecnológica de Aguascalientes</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image1: {
    width: 310,
    height: 120,
    marginBottom: 20,
  },
  image2: {
    width: 210,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 220,
    color: '#2c2b70',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#2c2b70',
  },
  author: {
    position: 'absolute',
    bottom: 20,
    fontSize: 10,
    color: '#2c2b70',
  },
});

export default Login;