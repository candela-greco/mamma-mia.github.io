import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';


function Formulario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { register } = useContext(UserContext);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    const result = await register(email, password, confirmPassword);
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
          <h1>Registro</h1>

          {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Datos enviados correctamente.
          </Alert>}

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validacionEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                value={email}
                isInvalid={email}
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
                isInvalid={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validacionConfirmacionContrasena">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                required
                value={confirmPassword}
                isInvalid={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Form.Text id="passwordHelpBlock" muted>
                La contraseña debe tener entre 6-20 caracteres.
              </Form.Text>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              type="checkbox"
              label="Aceptar términos y condiciones"
              checked={termsAccepted}
              isInvalid={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          </Form.Group>

          <Button className="autenticacion" type="submit">Registrarse</Button>
        </Form>
      </div>
    </div>
  );
}

export default Formulario;

