import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PizzaList = ({ agregarAlCarrito }) => {
  const [pizzas, setPizzas] = useState([]);

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

  if (pizzas.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="cards-container">
      {pizzas.map((pizzaItem) => (
        <Card key={pizzaItem.id} className="card-pizza" style={{ width: '20rem', margin: '10px' }}>
          <Card.Img variant="top" src={pizzaItem.img} />
          <Card.Body>
            <div className="card-content">
              <Card.Title>{pizzaItem.name}</Card.Title>
              <hr />
              <Card.Subtitle className="ingredientes">
                <h5>Ingredientes:</h5>
                <p>🍕 {pizzaItem.ingredients.join(', ')}</p>
              </Card.Subtitle>
            </div>
            <div className="card-footer">
              <Card.Text className="precio">
                Precio: ${pizzaItem.price}
              </Card.Text>
              <div className="botones">
                <Button className="btn-card" aria-label="ojos">Ver más 👀</Button>
                <Button className="btn-card" aria-label="carrito" onClick={() => agregarAlCarrito(pizzaItem)}>
                  Añadir 🛒
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

PizzaList.propTypes = {
  agregarAlCarrito: PropTypes.func.isRequired,
};

export default PizzaList;
