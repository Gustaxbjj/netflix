import CardFilme from "./CardFilme";
import "./Carrossel.css";

function Carrossel ({descricao, listadeFilmes}) {
    return(
        <div className="minhaLista">

            <span>{descricao}</span>
            
            <div className="carrosel">
                {
                    listadeFilmes.map((filme, idx) => 
                        <CardFilme key={idx} filme={filme} />
                    )
                }
            </div>     
        </div>
    );
}

export default Carrossel;