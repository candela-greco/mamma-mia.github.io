import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import bulmaImg from "../assets/imgs/bulma.jpg";
import { UserContext } from '../Context/UserContext';
import { useContext, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const Profile = () => {
  const { logout, user, getProfile } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const result = await getProfile();

      if (!result.success) {
        setError(result.error);
      }

      setLoading(false);
    };

    fetchUserProfile();
  }, [getProfile]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div className="fondo-contenedor">
      {user ? (
        <div className="contenedor-form">
          <img className="img-perfil" src={bulmaImg} alt="" />
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="Email">
              <Form.Label column sm="2">
                Email: {user.email}
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Perfil">
              <Form.Label column sm="2">
                Perfil
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="Comprador nivel Oro" />
              </Col>
            </Form.Group>
          </Form>
          <Button className="salir" onClick={handleLogout}>Cerrar Sesión</Button>
        </div>
      ) : (
        <p>Por favor inicie sesión.</p>
      )}
    </div>
  );
}

export default Profile;
