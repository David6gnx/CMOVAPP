import React, { createContext, useState, useContext } from 'react';

// Definir el tipo de datos que tendrá el contexto
interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

// Crear el contexto con valores iniciales vacíos
const UserContext = createContext<UserContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }
  return context;
};

// Proveedor del contexto
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername, password, setPassword }}>
      {children}
    </UserContext.Provider>
  );
};
