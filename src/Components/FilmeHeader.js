import './FilmeHeader.css'
import { TbNumber12Small } from "react-icons/tb";

function FilmeHeader() {
    return (
        <div className='PaiHeader'>
            <div className='NomeFilme'>Luta pela Fé - A História do Padre Stu</div>

            <div className='infoFilme'>

                <div className='Tempo'>2022 2h 4min</div>

                <div className='classificacao'> 
                    <TbNumber12Small className="idade" />
                    <div className='sobre'>violência, drogas lícitas e linguagem imprópria</div>
                </div>

                <div className='descricao'>
                    <div className='texto'>
                        Este drama de 2022 sobre a jornada de um homem até o sacerdócio se baseia em uma história real.
                    </div>
                </div>

             
              

            </div>
        </div>
    )
}

export default FilmeHeader;
