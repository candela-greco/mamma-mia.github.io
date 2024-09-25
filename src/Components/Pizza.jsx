import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPizzaData = async (pizzaId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al obtener la pizza:', error);
      setPizza(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPizzaData(id);
    }
  }, [id]);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p>No se pudo cargar la pizza.</p>;
  }

  return (
    <div className="cards-container">
      <Card key={pizza.id} className="card-pizza" style={{ width: '20rem', margin: '10px' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <p>Descripción: {pizza.desc}</p>
          <p>🍕 Ingredientes: {pizza.ingredients.join(', ')}</p>
          <p>Precio: ${pizza.price}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pizza;

