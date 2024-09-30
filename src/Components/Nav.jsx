import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { ApiContext } from "../Context/ApiContext";
import { UserContext } from "../Context/UserContext";

const Nav = () => {
  const { total, cart, moreQuantity, lessQuantity, deleteItem } = useContext(ApiContext);
  const { token, logout } = useContext(UserContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  
  const setActiveClass = ({ isActive }) => (isActive ? "active links-nav" : "links-nav");

  const handleLogout = () => {
    console.log("Logout presionado");
    logout();
    navigate('/login')
  }

  const formatTotal = (amount) => {
    return (amount || 0).toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <div className="d-flex flex-grow-1">
          <h3>¡Mamma Mía!</h3>
          <div className="d-flex flex-grow-1">
              <NavLink className={setActiveClass} to="/">🍕Home</NavLink>
            {token ? (
              <>
                <NavLink className={setActiveClass} to="/profile">🔓 Profile</NavLink>
                  <button className="links-nav" onClick={handleLogout}>
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                  <NavLink className={setActiveClass} to="/Login">🔐 Login</NavLink>
                  <NavLink className={setActiveClass} to="/Register">
                    🔐 Register
                  </NavLink>
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




