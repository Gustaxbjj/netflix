import { Link } from "react-router-dom";
import "./CardFilme.css";

function CardFilme ({filme}) {

    return (
        <Link to={`/filme/${filme.id}`}>
            <img src={filme.fotoThumbnail} className="fotofilme" title={filme.descricao}></img>
        </Link>
    )
}

export default CardFilme;