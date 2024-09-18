import { useContext } from 'react';
import Cards from "../Components/Cards";
import { ApiContext } from '../Context/ApiContext';

const HomePage = () => {
  const { addToCart } = useContext(ApiContext);

  return (
    <div>
      <header className="header"></header>
      <main>
        <Cards addToCart={addToCart} />
      </main>
    </div>
  );
};

export default HomePage;
