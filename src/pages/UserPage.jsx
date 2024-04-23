import { useParams } from "react-router-dom"
// Hook useParams permite poder obtener los parametros de la URL

const UserPage = () => {

    const { id } = useParams();
    // console.log(params);

    return (
        <div>
            User <h1>{id}</h1>
        </div>
    );
}

export default UserPage;