import { useContext } from 'react';
import { PizzaApi } from '../Context/PizzaApi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Pizza = ({ addToCart }) => {
  const { pizza } = useContext(PizzaApi);

  if (!pizza) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="cards-container">
      <Card key={pizza.id} className="card-pizza" style={{ width: '20rem', margin: '10px' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
          <p>Precio: ${pizza.price}</p>
          <Button className="botonCarrito" onClick={() => addToCart(pizza)}>Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Pizza.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Pizza;
