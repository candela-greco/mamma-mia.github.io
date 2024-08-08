import Header from './Components/Header';
import Nav from './Components/Nav';
import CardPizza from './Components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import './index.css';
import napo from './assets/imgs/napo.jpeg'
import espanola from './assets/imgs/espanola.jpeg'
import peperoni from './assets/imgs/peperoni.jpeg'

function App() {
  return (
    <>
    <Nav></Nav>
    <Header></Header>
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
      </div>
    <Footer></Footer>
    </>
  );
}

export default App;
