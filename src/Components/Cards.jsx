import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const PizzaList = ({ addToCart }) => {
  const { pizzas } = useContext(ApiContext);

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
                <Link to="./PizzaView">
                  <Button className="btn-card" aria-label="ojos">Ver más 👀</Button>
                </Link>
                <Button className="btn-card" aria-label="carrito" onClick={() => addToCart(pizzaItem)}>
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
  addToCart: PropTypes.func.isRequired,
};

export default PizzaList;
