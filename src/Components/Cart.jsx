import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Carrito = ({ cart, aumentarCantidad, disminuirCantidad, eliminarItem }) => {
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
                  <Button className="botonCarrito" onClick={() => disminuirCantidad(item.id)}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button className="botonCarrito" onClick={() => aumentarCantidad(item.id)}>+</Button>
                  <Button onClick={() => eliminarItem(item.id)} className="ms-2 botonCarrito">🗑️</Button>
                </div>
              <hr />
              </div>
            </li>
          ))}
        </ul>
      )}
      <Button className="botonPago">Pagar</Button>
    </div>
  );
};

Carrito.propTypes = {
  cart: PropTypes.array.isRequired,
  aumentarCantidad: PropTypes.func.isRequired,
  disminuirCantidad: PropTypes.func.isRequired,
  eliminarItem: PropTypes.func.isRequired,
};

export default Carrito;