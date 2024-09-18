import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const PizzaApi = createContext();

const fetchPizzaData = async (url, setPizza) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  } catch (error) {
    console.error("Error al obtener la pizza:", error);
    setPizza(null);
  }
};

const PizzaProvider = ({ children, pizzaId }) => {
  const [pizza, setPizza] = useState(null);
  const url = `http://localhost:5000/api/pizzas/${pizzaId}`;

  useEffect(() => {
    fetchPizzaData(url, setPizza);
  }, [url]);

  return (
    <PizzaApi.Provider value={{ pizza }}>
      {children}
    </PizzaApi.Provider>
  );
};

PizzaProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pizzaId: PropTypes.string.isRequired,
};

export default PizzaProvider;


