import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: false, password: false, terms: false });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    const newError = { email: false, password: false, terms: false };

    if (email === "") {
      newError.email = true;
    }
    if (password === "" || password.length < 6) {
      newError.password = true;
    }
    if (!termsAccepted) {
      newError.terms = true;
    }
    if (newError.email || newError.password || newError.terms) {
      setError(newError);
      return;
    }
    setError({ email: false, password: false, confirmPassword: false, terms: false });
    setPassword('');
    setEmail('');
    setTermsAccepted(false);
    setShowAlert(true);
  };

  return (
    <div className="fondo-contenedor">
      <div className="contenedor-form">
        <Form noValidate onSubmit={validarDatos}>
          <h1>Login</h1>

          {error.email && <p className="text-danger">Por favor, ingrese un email válido.</p>}
          {error.password && <p className="text-danger">La contraseña debe tener al menos 6 caracteres.</p>}
          {error.terms && <p className="text-danger">Debe aceptar los términos y condiciones.</p>}

          {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Autentificación correcta.
          </Alert>}

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validacionEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                value={email}
                isInvalid={error.email}
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
                isInvalid={error.password}
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
              isInvalid={error.terms}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          </Form.Group>
          <Link to="/Profile">
            <Button className="autenticacion" type="submit">Enviar</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;