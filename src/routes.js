import { Routes, Route } from "react-router-dom";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";
import Config from "./pages/Config";
import FilmePage from "./pages/FilmePage"; 
import Semelhantes from "./Components/Semelhantes"; // importando o componente

function MainRoutes() {
    return (
        <Routes> 
            <Route path="/" element={<Profiles />} />
            <Route path="/home" element={<Home />} />
            <Route path="/config" element={<Config />} />
            <Route path="/filme" element={<FilmePage />} />
            <Route path="/filme/:id" element={<FilmePage />} /> 
            <Route path="/Semelhantes" element={<Semelhantes />} /> {/* rota adicionada */}
        </Routes>
    );
}

export default MainRoutes;
