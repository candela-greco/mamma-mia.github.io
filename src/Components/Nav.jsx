import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { ApiContext } from "../Context/ApiContext";

const Nav = () => {
  const { total, cart, moreQuantity, lessQuantity, deleteItem } = useContext(ApiContext);
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
            <Link className="link" to="/">
              <Button className="nav-item mx-2 btn-custom">🍕Home</Button>
            </Link>
            {token ? (
              <>
                <Button className="nav-item mx-2 btn-custom">🔓 Profile</Button>
                <Button className="nav-item mx-2 btn-custom">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Link className="link" to="/Login">
                  <Button className="nav-item mx-2 btn-custom">🔐 Login</Button>
                </Link>
                <Link className="link" to="/Register">
                  <Button className="nav-item mx-2 btn-custom">
                    🔐 Register
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className="ml-auto">
            <Dropdown show={showCart} onToggle={() => setShowCart(!showCart)}>
              <Dropdown.Toggle as={Button} className="nav-item mx-2 btn-custom">
                🛒 Total: ${formatTotal(total)}
              </Dropdown.Toggle>
              <Dropdown.Menu className="cart-dropdown-menu">
                <Cart
                  cart={cart}
                  moreQuantity={moreQuantity}
                  lessQuantity={lessQuantity}
                  deleteItem={deleteItem}
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;


