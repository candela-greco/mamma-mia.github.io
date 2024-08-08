import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card className="card-pizza" style={{ width: '20rem', margin: '10px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <div className="card-content">
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Subtitle className="ingredientes">
         <h5>Ingredientes:</h5>
        <span role="img" aria-label="pizza">🍕</span> {ingredients.join(', ')}
        </Card.Subtitle>
        </div>
        <div className="card-footer">
        <Card.Text className="precio">
          Precio: ${price}
        </Card.Text>
        <div className="botones">
        <Button className="btn-card" aria-label="ojos">Ver más 👀</Button>
        <Button className="btn-card" aria-label="carrito">Añadir 🛒</Button>
        </div>
        </div>
      </Card.Body>
    </Card>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired
};

export default CardPizza;

