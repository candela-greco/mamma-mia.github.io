/* import Home from './Components/Home';
import napo from './assets/imgs/napo.jpeg'
import espanola from './assets/imgs/espanola.jpeg'
import peperoni from './assets/imgs/peperoni.jpeg'
import CardPizza from './Components/Cards'
*/

import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './index.css';
import Formulario from './Components/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Nav></Nav>
    <Formulario />
    {/*
    <Home></Home>
    <div className="contenedor-flex">
        <CardPizza
          img={napo}
          name="Pizza Napolitana"
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          price={5950}
        />
        <CardPizza
          img={espanola}
          name="Pizza Española"
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          price={6950}
        />
        <CardPizza
          img={peperoni}
          name="Pizza Pepperoni"
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          price={6950}
        />
      </div> */}
      <Footer></Footer>
    </>
  );
}

export default App;
