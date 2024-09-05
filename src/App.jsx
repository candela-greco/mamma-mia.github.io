import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Router correctamente
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import HomePage from "./Views/HomePage";
import LoginPage from "./Views/LoginPage";
import RegisterPage from "./Views/RegisterPage";
import CartPage from "./Views/CartPage";


function App() {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const actualizarCantidad = (pizzaId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const aumentarCantidad = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const disminuirCantidad = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const eliminarItem = (pizzaId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== pizzaId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router basename="//mamma-mia.github.io.git">
      <div className="App">
        <Nav 
          cart={cart} 
          total={total} 
          actualizarCantidad={actualizarCantidad}
          aumentarCantidad={aumentarCantidad}
          disminuirCantidad={disminuirCantidad}
          eliminarItem={eliminarItem}
        />
        <Routes>
          <Route path="/" element={<HomePage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/Cart" element={<CartPage 
            cart={cart} 
            actualizarCantidad={actualizarCantidad}
            aumentarCantidad={aumentarCantidad}
            disminuirCantidad={disminuirCantidad}
            eliminarItem={eliminarItem} 
          />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
