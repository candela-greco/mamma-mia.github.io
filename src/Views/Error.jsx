import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const error = () =>{
    return (
        <div>
            <header className="black-header">
                <div className="error">
                    <div className="boton-error">
                        <Link to="/">
                            <Button>←</Button>
                        </Link>
                    </div>
                    <div className="texto-error">
                        <h1>Error 404</h1>
                        <h3>Lamentamos informarte que no encontramos los ingredientes que estas buscando</h3>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default error;