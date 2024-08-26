import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const token = false;
  const total = 25000;

  const formatTotal = (amount) => {
    return amount.toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
      <div className="d-flex flex-grow-1">
        <h3>¡Mamma Mía!</h3>
        <div className="d-flex flex-grow-1">
            <Button className="nav-item mx-2 btn-custom"> 🍕Home</Button>
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
            <Button className="nav-item mx-2 btn-custom">🛒 Total: ${formatTotal(total)}</Button>
          </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;