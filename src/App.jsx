import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import HomePage from "./Views/HomePage";
import LoginPage from "./Views/LoginPage";
import RegisterPage from "./Views/RegisterPage";
import CartPage from "./Views/CartPage";
import PizzaView from "./Views/PizzaView";
import Error from "./Views/Error";
import ProfilePage from "./Views/ProfilePage";
import { ApiProvider } from "./Context/ApiContext";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
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

  const updateQuantity = (pizzaId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const moreQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const lessQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === pizzaId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const deleteItem = (pizzaId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== pizzaId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ApiProvider>
      <Router basename="//mamma-mia.github.io.git">
        <div className="App">
          <Nav
            cart={cart}
            total={total}
            updateQuantity={updateQuantity}
            moreQuantity={moreQuantity}
            lessQuantity={lessQuantity}
            deleteItem={deleteItem}
          />
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route path="/Cart" element={<CartPage
              cart={cart}
              updateQuantity={updateQuantity}
              moreQuantity={moreQuantity}
              lessQuantity={lessQuantity}
              deleteItem={deleteItem}
            />} />
            <Route path="/PizzaView" element={<PizzaView addToCart={addToCart} />} />
            <Route path="/*" element={<Error />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApiProvider>
  );
}

export default App;
