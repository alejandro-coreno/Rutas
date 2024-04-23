import {Link}  from "react-router-dom"

const usuario = 20;

const HomePage = () => {
    return(
        <div>
            <h1>Aplicacion</h1>
            <Link to={`users/${usuario}`} >Usuarios</Link>
        </div>
    );
}

export default HomePage;