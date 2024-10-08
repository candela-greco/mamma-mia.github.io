import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ApiContext } from '../Context/ApiContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, moreQuantity, lessQuantity, deleteItem, total, checkout, clearCart } = useContext(ApiContext);
  const navigate = useNavigate();

  const formatTotal = (amount) => {
    return (amount || 0).toLocaleString();
  };

  const handleCheckout = async () => {
    try{
      const result = await checkout ();
      clearCart();
      alert(`Compra realizada exitosamente. Detalle: ${JSON.stringify(result)}`);
      navigate("/");
    } catch  (error) {
      alert ("Hubo un problema al realizar la compra. Por favor, vuelva a intentarlo");
    }
  }

  return (
    <div className="paginaCarrito">
      <Link to="/">
      <Button className="boton-volver"> ← Volver </Button>
      </Link>
      <h1>Carrito:</h1>
      <ul>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cart.map((item) => (
            <li key={item.id} className="d-flex align-items-center mb-2">
              <img className="imgCarrito" src={item.img} alt={item.name} />
              <div className="ms-2">
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <div className="d-flex">
                  <Button className="botonCarrito" onClick={() => lessQuantity(item.id)}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button className="botonCarrito" onClick={() => moreQuantity(item.id)}>+</Button>
                  <Button className="ms-2 botonCarrito" onClick={() => deleteItem(item.id)}>🗑️</Button>
                </div>
                <hr />
              </div>
            </li>
          ))
        )}
      </ul>
      <div>
      🛒 Total: ${formatTotal(total)}
      <Button className="botonPago" onClick={handleCheckout}>Pagar</Button>
      </div>
    </div>
  );
};

export default CartPage;
