import "./Home.css";

import NaveBar from "../Components/NavBar";
import InfoPrinc from "../Components/InfoPrinc";
import Catalogo from "../Components/Catalogo";
import CarroselNum from "../Components/CarroselNum";

import {filmes, filmes2, filmesNum} from '../Services/FilmesMock';

function Home(){    
    return(

        <div className="tela">
            
            <div className="casa">
                <NaveBar />
                <InfoPrinc />

                <div className="todosFilme">
                    <Catalogo listadeFilmes={filmes} descricao="Novidades na Netflix"/>
                    <Catalogo listadeFilmes={filmes2} descricao="Descubra suas próximas hitórias"/>
                    <CarroselNum listaNumerada ={filmesNum}/>

                </div>
            </div>
        
        </div>
    );
}

export default Home;