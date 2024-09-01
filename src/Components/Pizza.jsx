import { useState, useEffect } from "react";

const Pizzas = () => {
  const [pizza, setPizza] = useState(null);

  const url = "http://localhost:5000/api/pizzas/p001";

  const infoApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  useEffect(() => {
    infoApi();
  }, []);

  return (
    <div key={pizza.id} className="pizza">
        <img src={pizza.img} alt={pizza.name} />
      <div className="pizza-texto">
        <h2>{pizza.name}</h2>
        <h4>Descripción:</h4>
        <p>{pizza.desc}</p>
        <h5>Ingredientes:</h5>
        <p>{pizza.ingredients.join(', ')}</p>
        <h3>Precio: ${pizza.price}</h3>
        <button className="pizza-btn"> Añadir 🛒</button>
      </div>
    </div>
  );
};

export default Pizzas;
