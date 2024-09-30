import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Token actualizado:", token);
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Error en la autenticación." };
      }
    } catch (error) {
      return { success: false, error: "Error en la conexión con el servidor." };
    }
  };

  const register = async (email, password, confirmPassword) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Error en el registro." };
      }
    } catch (error) {
      return { success: false, error: "Error en la conexión con el servidor." };
    }
  };

  const getProfile = async () => {
    if (!token) {
      return { success: false, error: "No hay token disponible." };
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setUser(data);
        return { success: true, data };
      } else {
        return { success: false, error: data.error || "Error al obtener el perfil." };
      }
    } catch (error) {
      return { success: false, error: "Error en la conexión con el servidor." };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ token, login, register, getProfile, logout, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;


