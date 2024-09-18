import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ApiContext } from '../Context/ApiContext';

const Carrito = () => {
  const { cart, moreQuantity, lessQuantity, deleteItem } = useContext(ApiContext);

  return (
    <div className="listaCarrito">
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="d-flex align-items-center mb-2">
              <img className="imgCarrito" src={item.img} alt={item.name} />
              <div className="ms-2">
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <div className="d-flex">
                  <Button className="botonCarrito" onClick={() => lessQuantity(item.id)}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button className="botonCarrito" onClick={() => moreQuantity(item.id)}>+</Button>
                  <Button onClick={() => deleteItem(item.id)} className="ms-2 botonCarrito">🗑️</Button>
                </div>
                <hr />
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/Cart">
        <Button className="botonPago">Pagar</Button>
      </Link>
    </div>
  );
};

export default Carrito;
