import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Pizza from "../Components/Pizza";

const PizzaView = () => {
  return (
    <div>
      <Link to="/">
        <Button className="boton-volver">← Volver</Button>
      </Link>
      <Pizza />
    </div>
  );
};

export default PizzaView;


