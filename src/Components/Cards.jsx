import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";


const CardPizza = () => {
  const [info, setInfo] = useState([]);

  const url = "http://localhost:5000/api/pizzas";

  const consultarApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
  };

  useEffect(() => {
    consultarApi();
  }, []);


  return (
    <div className="cards-container">
      {info.map((data) => (
        <Card key={data.id} className="card-pizza" style={{ width: '20rem', margin: '10px' }}>
          <Card.Img variant="top" src={data.img} />
          <Card.Body>
            <div className="card-content">
              <Card.Title>{data.name}</Card.Title>
              <hr />
              <Card.Text>
              <h4>Descripción:</h4>
              <p>{data.desc}</p>
              </Card.Text>
              <hr />
              <Card.Text className="ingredientes">
                <h5>Ingredientes:</h5>
                <p>🍕 {data.ingredients.join(', ')}</p>
              </Card.Text>
            </div>
            <div className="card-footer">
              <Card.Text className="precio">
                Precio: ${data.price}
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
