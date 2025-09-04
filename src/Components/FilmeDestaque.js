import "./FilmeDestaque.css";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { FaVolumeUp } from "react-icons/fa";
import { TbNumber12Small } from "react-icons/tb";
import { SiNetflix } from "react-icons/si";
import { Link } from "react-router-dom"; // importa o Link

function FilmeDestaque({filme}) {
    return (
        <div className="detInical">
            <div className="logoNet">
                <SiNetflix className="logo" />
                <span className="nomeFilm">F I L M E</span>
            </div>

            <div className="title">
                <span className="nomeFilme1"> {filme.titulo} </span>
                <span className="nomeFilme2"> {filme.genero} </span>
            </div>

            <div className="info">
                <div className="option">
                    
                    <Link to="/filme" className="maisinfo">
                        <CiCircleInfo className="ciculo" /> 
                        <span className="mais"> Mais informações</span>
                    </Link>
                </div>

                <div className="infos">
                    <FaVolumeUp className="volume" /> |
                    <TbNumber12Small className="idade" />
                </div>
            </div>
        </div>
    );
}

export default FilmeDestaque;
