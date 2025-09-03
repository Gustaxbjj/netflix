import "./FilmePage.css";
import Banner from "../Components/FilmeBanner";
import Nome from "../Components/FilmeNome"
import Header from '../Components/FilmeHeader'
import Elenco from '../Components/FilmeElenco'
import ComentariosContainer from '../Components/ComentariosContainer'
import Relacionados from '../Components/FilmesRelacionados'
import NavDetalhes from "../Components/NavBarDetalhes";

import { filmes } from '../Services/FilmesMock';
import Catalogo from "../Components/Catalogo";
import filmeService from "../Services/FilmesService";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";


function FilmePage() {

    const { id } = useParams(); // pega o parâmetro da URL
    const filmeId = parseInt(id);

    const filme = filmeId ? filmeService.getById(filmeId) : filmeService.getRandomFilme();

    if (!filme) return <NotFound/>
    return (
        <div className="Filme">
            <div className="Navbar">
                <NavDetalhes />
            </div>
            <div className="PaidetodosFilme">
                <div className="divFilmeBanner">
                    <Banner filme={filme}/>
                </div>

                <div className="infos">
                    <div className="Nome"> <Nome filme={filme}/> </div>
                    <Header filme={filme}/>

                    <div className="atores-container">
                        <Elenco filme={filme}/>
                    </div>
                </div>

            </div>

            <div className="container-comentarios">
                <ComentariosContainer filme={filme}/>
            </div>

            <div className="container-relacionados">
                <Catalogo listadeFilmes={filmes} descricao="Relacionados"/>
            </div>

        </div>

    );
}

export default FilmePage;
