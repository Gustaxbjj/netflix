import FilmeBanner from "../Components/FilmeBanner";
import "./FilmePage.css";
import Header from '../Components/FilmeHeader'


function FilmePage() {
    return (
        <div className="PaidetodosFilme">
            <div className="FilmeBanner">
                <FilmeBanner />
            </div>
            <div className="infos">
             
            <Header />
              
            </div>
        </div>
    );
}

export default FilmePage;
