import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { pizza } from './pizzas';

const CardPizza = () => {
  return (
    <div className="cards-container">
      {pizza.map((pizzaItem) => (
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
                <Button className="btn-card" aria-label="carrito">
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


export default CardPizza;
