import { useNavigate, Link , Outlet} from "react-router-dom";

// Outlet indica en que parte de la interfaz debe mostrarse el subcomponente

const Dasboard = () => {
    
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            
            
            <h1>
                Dasboard
            </h1>

            <button onClick={handleClick}>Logout</button>

            <Link to="welcome">Entrar a welcome</Link>
            
            <Outlet />

        </>
    );
}

export default Dasboard;