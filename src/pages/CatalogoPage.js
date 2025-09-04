import './CatalogoPage.css'
import cabana from '../Imagens/cabana.jpg'
import comeSunday from '../Imagens/Come-Sunday.jpg'
import twoPopes from '../Imagens/TwoPopes.jpg'
import fight from '../Imagens/fight.jpeg'
import calvary from '../Imagens/calvary.jpeg'
import chavory from '../Imagens/chariots.jpeg'

import NavBar from '../Components/NavBar';

function CatalogoPage() {
    return (
        <div className='paicatalogo'>
            <div className='navbar'>
                <NavBar />
            </div>

            <div className='containers-catalogo'>

            
                <div className='container'>
                    <div className='img-container'>
                        <img src={cabana} className='foto' alt="A Cabana" />
                    </div>
                    <div className='introducao'>
                        Descrição: Após uma tragédia familiar, Mackenzie Phillips é convidado por Deus a passar um fim de semana em uma cabana isolada, onde encontra respostas para suas dúvidas e dor.
                    </div>
                    <div className='diretor-escritor'>
                        <div className='diretor'> Diretor: Stuart Hazeldine</div>
                        <div className='escritor'> Roteiristas: John Fusco, Andrew Lanham e Destin Daniel Cretton</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CatalogoPage;
