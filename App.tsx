import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './src/Login';
import Menu from './src/Menu';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <Menu /> : <Login onLoginSuccess={() => setIsLoggedIn(true)} />}
    </View>
  );
};

export default App;
