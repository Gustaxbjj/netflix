import './FilmeHeader.css'
import { TbNumber12Small } from "react-icons/tb";
import CatalogoPage from '../pages/CatalogoPage';
import { Link } from 'react-router-dom'

function FilmeHeader({ filme }) {
    return (
        <div className='PaiHeader'>
            <div className='infoFilme'>
                <div className='Tempo'>Duração: {filme.duracao}</div>

                <div className='classificacao'>
                    <span className="idade">{filme.faixa_etaria}</span>
                </div>

                <div className='sobre'>Gênero: {filme.genero}</div>

                <div className='descricao'>
                    <div className='texto'>
                        {filme.sinopse}
                    </div>

                    <div className='card-menu'>
                        <span className='cor-visao'>
                            COMENTÁRIOS
                        </span>
                        <Link className='cor-visao' to={'/catalogo'}> 
                            TITULOS SEMELHANTES 
                        </Link>
                        <span className='cor-visao'>
                            DETALHES
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilmeHeader;
