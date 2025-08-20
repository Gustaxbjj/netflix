import './FilmeHeader.css'
import { TbNumber12Small } from "react-icons/tb";


function FilmeHeader() {
    
    return(
        
    <div className='PaiHeader'>
            <div className='NomeFilme'> Luta pela Fé - A História do Padre Stu</div>
           

<div className='infoFilme'>
        
        <div className='infos'>

             <div className='Tempo'>2022 2h 4min</div>
            
                 <div className='classificacao'> 
                    <TbNumber12Small className="idade" />
                    <div className='sobre'> violência, drogas lícitas e linguagem imprópria</div> <div/>    
                 </div>

            <div className='descricao'>
                <div className='texto'> Este drama de 2022 sobre a jornada de um homem até o sacerdócio se baseia em uma história real.</div>
            </div>


        </div>
            <div className='genero-elenco-estefilme'>
                
                <div className='elenco'>
                    <div className='nome'> Mark Wahlberg </div>
                    <div className='nome'>Mel Gibson</div>
                    <div className='nome'>Jacki Weaver</div>
                    <div className='nome'>Teresa Ruiz</div>
                    <div className='nome'>Malcolm McDowel</div>
                    <div className='nome'>Annet Mahendru</div>
                    <div className='nome'>Cody Fern</div>
                </div>

            </div>

    </div>
</div>
    )

}

export default FilmeHeader