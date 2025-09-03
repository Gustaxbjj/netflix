import "./SelecaoPerfil.css";
import BotaoVazado from "./BotaoVazado";
import CardPerfil from "./Card";

function SelecaoPerfil ({listaDeUsuarios}) {

    return(
        
        
        <div className="selecao-perfil">
            <h2>
                Quem está assistindo?
            </h2>

            <div className="janelas">

            {
                listaDeUsuarios.map(user => 
                    <CardPerfil usuario={user} />
                )
            }

            </div>

            <BotaoVazado />

        </div>

    );
}

export default SelecaoPerfil;