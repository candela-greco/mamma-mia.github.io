import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({
    email: "ejemplo@email.com",
    displayName: "Ejemplo"
  });

  useEffect(() => {
    console.log("Token actualizado:", token);
  }, [token]);

  const login = () => {
    console.log("Login realizado, token a true");
    setToken(true);
  };

  const logout = () => {
    console.log("Logout realizado, token a false");
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, login, logout, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
