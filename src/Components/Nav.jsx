import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Cart from './Cart';

const Nav = ({ total, cart, actualizarCantidad, aumentarCantidad, disminuirCantidad, eliminarItem }) => {
  const token = false;

  const [showCart, setShowCart] = useState(false);

  const formatTotal = (amount) => {
    return (amount || 0).toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <div className="d-flex flex-grow-1">
          <h3>¡Mamma Mía!</h3>
          <div className="d-flex flex-grow-1">
            <Button className="nav-item mx-2 btn-custom"><link to="/" />🍕Home</Button>
            {token ? (
              <>
                <Button className="nav-item mx-2 btn-custom">🔓 Profile</Button>
                <Button className="nav-item mx-2 btn-custom">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button className="nav-item mx-2 btn-custom">🔐 Login</Button>
                <Button className="nav-item mx-2 btn-custom">🔐 Register</Button>
              </>
            )}
          </div>
          <div className="ml-auto">
            <Dropdown show={showCart} onToggle={() => setShowCart(!showCart)}>
              <Dropdown.Toggle as={Button} className="nav-item mx-2 btn-custom">
                🛒 Total: ${formatTotal(total)}
              </Dropdown.Toggle>
              <Dropdown.Menu className="cart-dropdown-menu">
                <Cart cart={cart} actualizarCantidad={actualizarCantidad} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad} eliminarItem={eliminarItem} />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  total: PropTypes.number.isRequired,
  cart: PropTypes.array.isRequired,
  actualizarCantidad: PropTypes.func.isRequired,
  aumentarCantidad: PropTypes.func.isRequired,
  disminuirCantidad: PropTypes.func.isRequired,
  eliminarItem: PropTypes.func.isRequired,
};

export default Nav;

