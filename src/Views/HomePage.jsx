import Cards from "../Components/Cards";
import PropTypes from 'prop-types';

const HomePage = ({agregarAlCarrito}) => {
  return (
    <div>
      <header className="header"></header>
      <main>
        <Cards agregarAlCarrito={agregarAlCarrito} />
      </main>
    </div>
  );
};

HomePage.propTypes = {
    agregarAlCarrito: PropTypes.func.isRequired,
};

export default HomePage;