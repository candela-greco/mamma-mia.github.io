/* 
import Formulario from './Components/RegisterPage';
import Login from './Components/Login'
import Carrito from './Components/Carrito'
import Home from './Components/Home';
*/
import Pizza from './Components/Pizza'
import Footer from './Components/Footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';


function App() {
  return (
    <>
    <Nav />
    <Pizza />
    {/*
    <Home />
    <Carrito/>
    <Formulario />
    <Login />
    */}
      <Footer />
    </>
  );
}

export default App;
