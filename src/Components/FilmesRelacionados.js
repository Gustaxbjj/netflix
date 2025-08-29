import './FilmesRelacionados.css'
import cobrakai from '../Imagens/cobrakai.jpeg'
import arrow from '../Imagens/arrow.jpg'
import eleven from '../Imagens/eleven.jpeg'
import peak from '../Imagens/peak.jpg'
import round from '../Imagens/round.jpg'
import stranger from '../Imagens/stranger.jpg'
import thechosen from '../Imagens/thechosen.jpg'
import thegood from '../Imagens/thegoodplace.webp'
import theking from '../Imagens/theking.jpg'
import thewitcher from '../Imagens/thewitcher.jpg'

function FilmeRelacionado (){

    return(
  <div className='Pai-relacionados'>
      <div className='text-relacionados'> Relacionados</div>

        <div className='filmes-container'>


            <div className='carrosel1'>
           <img src={cobrakai} className='filmes'/>
            <img src={arrow} className='filmes'/>
            <img src={eleven} className='filmes'/>
            <img src={peak} className='filmes'/>
            <img src={round} className='filmes'/>
            </div>            
         


           <div className='carrosel2'>
             <img src={stranger} className='filmes'/>
            <img src={thechosen} className='filmes'/>
            <img src={theking} className='filmes'/>
            <img src={thegood} className='filmes'/>
            <img src={thewitcher} className='filmes'/>
           </div>
         

        </div>
       



  </div>
    )

}

export default FilmeRelacionado