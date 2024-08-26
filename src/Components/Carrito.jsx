import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { pizza } from './pizzas';

const Carrito = () => {
  
  const [carrito, setCarrito] = useState(
    pizza.map((item) => ({ ...item, quantity: item.quantity || 0 }))
  );

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const eliminarItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };
  return (
    <div className="listaCarrito">
      <h1>Carrito: </h1>
      <ul>
        {carrito.map((item) => (
          <li key={item.id} className="d-flex align-items-center mb-2">
            <img className="imgCarrito" src={item.img} alt={item.name} />
            <div className="ms-2">
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <div className="d-flex">
                <Button className="botonCarrito" onClick={() => disminuirCantidad(item.id)}>
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button className="botonCarrito" onClick={() => aumentarCantidad(item.id)}>
                  +
                </Button>
                <Button className="ms-2 botonCarrito" onClick={() => eliminarItem(item.id)}>
                  🗑️
                </Button>
              </div>
              <hr />
            </div>
          </li>
        ))}
      </ul>
      <Button className="botonPago">Pagar</Button>
    </div>
  );
};

export default Carrito;

