import './Semelhantes.css'
import NavDetalhes from './NavBarDetalhes'
import cabana from '../Imagens/cabana.jpg'


function Semelhantes(){
    return(
        <div className='paiSemelhantes'>
               <div className='navbar'>
                    <NavDetalhes />
               </div>

                <div className='containers-semelhantes'>
                   
                    <div className='container'>
                            <div className='img-container'>
                                <img src={cabana} className='foto' />
                            </div>
                            <div className='introducao'>
                                Após uma tragédia familiar, Mackenzie Phillips é convidado por Deus a passar um fim de semana em uma cabana isolada, onde encontra respostas para suas dúvidas e dor.
                            </div>
                    </div>

                     <div className='container'>
                            <div className='img-container'>
                                <img src={cabana} className='foto' />
                            </div>
                            <div className='introducao'>
                                Após uma tragédia familiar, Mackenzie Phillips é convidado por Deus a passar um fim de semana em uma cabana isolada, onde encontra respostas para suas dúvidas e dor.
                            </div>
                    </div>

                </div>
        </div>
    )
}

export default Semelhantes