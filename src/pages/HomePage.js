import "./HomePage.css";

import NaveBar from "../Components/NavBar";
import filmeService from "../Services/FilmesService";
import Carrossel from "../Components/Carrossel";
import CarroselNum from "../Components/CarroselNum";
import FilmeDestaque from "../Components/FilmeDestaque";

import {filmes, filmes2, filmesNum} from '../Services/FilmesMock';

function HomePage(){
    
    const filmeTopo = filmeService.getRandomFilme();

    return(
        <div className="tela" style={{ backgroundImage: `url(${filmeTopo.fotoThumbnail})` }}>
            
            <div className="casa">
                <NaveBar />
                <FilmeDestaque filme={filmeTopo}/>

                <div className="todosFilme">
                    <Carrossel listadeFilmes={filmes} descricao="Novidades na Netflix"/>
                    <Carrossel listadeFilmes={filmes2} descricao="Descubra suas próximas hitórias"/>
                    <CarroselNum listaNumerada ={filmesNum}/>

                </div>
            </div>
        
        </div>
    );
}

export default HomePage;