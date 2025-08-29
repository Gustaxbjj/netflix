import './FilmeHeader.css'
import { TbNumber12Small } from "react-icons/tb";
import Semelhantes from '../Components/Semelhantes'
import {Link } from 'react-router-dom'

function FilmeHeader() {
    return (
        <div className='PaiHeader'>
            

            <div className='infoFilme'>

                <div className='Tempo'>2022 2h 4min</div>

                <div className='classificacao'> 
                    <TbNumber12Small className="idade" />
                    <div className='sobre'>violência, drogas lícitas e linguagem imprópria</div>
                </div>

                <div className='descricao'>
                    <div className='texto'>
                       Luta pela Fé é um drama inspirador que acompanha a jornada de superação de um jovem atleta.
Ele enfrenta dificuldades familiares, pressões sociais e a dura realidade da vida.
Em meio a tantas batalhas, encontra na fé a força para seguir em frente.
Com o apoio de amigos e pessoas próximas, aprende a não desistir dos seus sonhos.
O esporte se torna não apenas uma competição, mas um caminho de transformação.
Cada obstáculo representa uma oportunidade de crescimento pessoal.
A mensagem central é de esperança, perseverança e confiança em Deus.
O filme mostra que a fé verdadeira pode mudar destinos.
É uma história emocionante, que toca o coração de quem assiste.
Ideal para refletir sobre coragem, amor e propósito de vida.
                    </div>

                <div className='card-menu'>
    
                 <span className='cor-visao'>COMENTÁRIOS</span>
                 <Link className='cor-visao2' to={'/Semelhantes'} > TITULOS SEMELHANTES </Link>
                 <span>DETALHES</span>
               </div>

                </div>
            </div>
        </div>
    )
}

export default FilmeHeader;
