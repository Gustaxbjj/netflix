import { Routes, Route } from "react-router-dom";
import ProfilesPage from "./pages/ProfilesPage";
import ConfigPage from "./pages/ConfigPage";
import FilmePage from "./pages/FilmePage"; 
import CatalogoPage from "./pages/CatalogoPage"; // importando o componente
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function MainRoutes() {
    return (
        <Routes> 
            <Route path="/" element={<ProfilesPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/config" element={<ConfigPage />} />
            <Route path="/filme" element={<FilmePage />} />
            <Route path="/filme/:id" element={<FilmePage />} /> 
            <Route path="/catalogo" element={<CatalogoPage />} /> {/* rota adicionada */}
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default MainRoutes;
