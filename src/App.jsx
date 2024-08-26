/* 
import Formulario from './Components/RegisterPage';
import Login from './Components/Login'
import Home from './Components/Home';
*/

import Footer from './Components/Footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Carrito from './Components/Carrito'


function App() {
  return (
    <>
    <Nav />
    <Carrito/>
    {/*
    <Home />
    <Formulario />
    <Login />
    */}
      <Footer />
    </>
  );
}

export default App;
