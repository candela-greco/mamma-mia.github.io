import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import { UserContext } from "./Context/UserContext";

function App() {
  const [cart, setCart] = useState([]);
  const { token } = useContext(UserContext);

  console.log("Token en App:", token);
  
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      console.log('Añadiendo al carrito:', pizza);
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

  useEffect(() => {
    console.log("Carrito actualizado:", cart);
  }, [cart]);

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
        <BrowserRouter basename="/mamma-mia.github.io.git">
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
              <Route path="/pizza/:id" element={<PizzaView addToCart={addToCart} />} />
              <Route path="/*" element={<Error />} />
              <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
              <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />
              <Route path="/profile" element={token ? <ProfilePage /> : <Navigate to="/login" />} />
              </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ApiProvider>
  );
}

export default App;
