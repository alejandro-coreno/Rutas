import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import Dasboard from "./pages/Dasboard";

// Con BrowserRouter Creamos URL de nuestra aplicacion envuelve la app
// Route nos permite definir una ruta con las propiedades PATH y ELEMENT
// Routes Conjunto de Rutas definidas
// NavLink permite al usuario navegar dinamicamente
// Link es equivalente a un enlace sin necesidad de refrescar la pagina
// Navigate permite redirrecionar a un componente 
// useNavigate permite redirrecionar al usuario desde cualquier parte de la aplicacion
// Creamos subcomentes de rutas
// Con el componente outlet indicamos donde queremos mostrar ese subcoponente en la vista dasboard

const App = () => {
  return (
    <BrowserRouter>
      {/* Importamos la barra de navegacion que tendran todos los componentes */}
      <NavBar />

      {/* Rutas de Navegacion */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/usuarios" element={<Navigate to="/users" />}></Route>
        <Route path="/users/:id" element={<UserPage />}></Route>
        <Route path="/dasboard/*" element={<Dasboard />}>
          <Route path="welcome" element={<p>Weldome!!!</p>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;