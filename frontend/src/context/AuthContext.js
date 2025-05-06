import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const loggedUser = (userData) => {
    setUser(userData);
  };

  const loggedOutUser = () => {
    setUser('')
  }

  return (
    <AuthContext.Provider value={{ user, loggedUser, loggedOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
