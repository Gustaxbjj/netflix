import "./FilmePage.css";
import Banner from "../Components/FilmeBanner";
import Nome from "../Components/FilmeNome"
import Header from '../Components/FilmeHeader'
import Elenco from '../Components/FilmeElenco'
import CardComentario from '../Components/CardComentario'

function FilmePage() {
    return (
 <div className="Filme">
        <div className="PaidetodosFilme">
           
           
            <div className="FilmeBanner">
                 <Banner/>
            </div>

           

            <div className="infos">
                 <div className="Nome"> <Nome  /> </div>
                <Header />

                <div className="atores-container">
                    <Elenco />
                </div>
            </div>

        </div>

        <div className="container-comentarios">
                <CardComentario     />
                
        </div>
</div>

    );
}

export default FilmePage;
