import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const url = "http://localhost:5000/api/pizzas";

  const fetchPizzas = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
      setPizzas([]);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (pizzaId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const moreQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const lessQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const deleteItem = (pizzaId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== pizzaId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error ("Error en la transacción.");
      }

      const data = await response.json();
      console.log("Checkout exitoso:", data);
      return data;
    } catch (error) {
      console.error ("Error al realizar el checkout:", error);
    }
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ApiContext.Provider value={{ pizzas, cart, addToCart, updateQuantity, moreQuantity, lessQuantity, deleteItem, total, checkout, clearCart }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

