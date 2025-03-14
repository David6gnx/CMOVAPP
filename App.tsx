import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './src/Login';
import Menu from './src/Menu';
import { UserProvider } from './src/context/UserContext'; // Importar el proveedor del contexto

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      <View style={{ flex: 1 }}>
        {isLoggedIn ? <Menu /> : <Login onLoginSuccess={() => setIsLoggedIn(true)} />}
      </View>
    </UserProvider>
  );
};

export default App;
