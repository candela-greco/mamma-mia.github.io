import Pizza from "../Components/Pizza";
import PropTypes from 'prop-types';
import PizzaProvider from "../Context/PizzaApi";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const PizzaView = ({ addToCart }) => {
  const pizzaId = "p001";

  return (
    <div>
    <Link to="/">
      <Button className="boton-volver"> ← Volver </Button>
      </Link>
    <PizzaProvider pizzaId={pizzaId}>
      <Pizza addToCart={addToCart} />
    </PizzaProvider>
    </div>
  );
};

PizzaView.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default PizzaView;

