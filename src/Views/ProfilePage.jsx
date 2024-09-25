import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import bulmaImg from "../assets/imgs/bulma.jpg";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';

function PlaintextExample() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="fondo-contenedor">
      <div className="contenedor-form">
        <img className="img-perfil" src={bulmaImg} alt="" />
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Email
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="bulmasky@gmail.com" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
            Perfil
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="Comprador nivel Oro" />
            </Col>
        </Form.Group>
        </Form>
        <Link to="/Login">
        <Button className="salir" onClick={handleLogout}>Cerrar Sesion</Button>
        </Link>
        </div>
    </div>
  );
}

export default PlaintextExample;