import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      setShowAlert(true);
      navigate("/profile");
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="fondo-contenedor">
      <div className="contenedor-form">
        <Form noValidate onSubmit={handleSubmit}>
          <h1>Login</h1>

          {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Autenticación correcta.
          </Alert>}

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validacionEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validacionContrasena">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              type="checkbox"
              label="Aceptar términos y condiciones"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          </Form.Group>

          <Button className="autenticacion" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;


