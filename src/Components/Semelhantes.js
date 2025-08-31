import './Semelhantes.css'
import NavDetalhes from './NavBarDetalhes'
import cabana from '../Imagens/cabana.jpg'
import comeSunday from '../Imagens/Come-Sunday.jpg'
import twoPopes from '../Imagens/TwoPopes.jpg'
import fight from '../Imagens/fight.jpeg'
import calvary from '../Imagens/calvary.jpeg'
import chavory from '../Imagens/chariots].jpeg'

function Semelhantes() {
    return (
        <div className='paiSemelhantes'>
            <div className='navbar'>
                <NavDetalhes />
            </div>

            <div className='containers-semelhantes'>

            
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

             
                <div className='container'>
                    <div className='img-container'>
                        <img src={comeSunday} className='foto' alt="Come Sunday" />
                    </div>
                    <div className='introducao'>
                        Descrição: Biografia forte sobre o pastor Carlton Pearson (Chiwetel Ejiofor), que questiona a existência do inferno e prega uma visão inclusiva do Evangelho, enfrentando uma igreja conservadora e sendo rejeitado.
                    </div>
                    <div className='diretor-escritor'>
                        <div className='diretor'> Diretor: Joshua Marston</div>
                        <div className='escritor'> Roteiro: Marcus Hinchey</div>
                    </div>
                </div>

               
                <div className='container'>
                    <div className='img-container'>
                        <img src={twoPopes} className='foto' alt="Dois Papas" />
                    </div>
                    <div className='introducao'>
                        Descrição: Um drama íntimo e provocador que imagina as conversas entre o Papa Bento XVI e o futuro Papa Francisco durante uma importante transição na Igreja — cheio de debates sobre fé, tradição e
                    </div>
                    <div className='diretor-escritor'>
                        <div className='diretor'> Diretor: Fernando Meirelles</div>
                        <div className='escritor'>Roteiro: Anthony McCarten</div>
                    </div>
                </div>


            </div>

            <div className='containers-semelhantes2'>
                
                    
                 <div className='container'>
                    <div className='img-container'>
                        <img src={fight} className='foto' alt="Dois Papas" />
                    </div>
                    <div className='introducao'>
                       Descrição: Inspirado em uma história real, acompanha Willard Bean — ex-campeão de boxe — e sua esposa, missionários que enfrentam rejeição enquanto tentam trazer sua fé a uma comunidade hostil, usando empatia, perseverança e até um ringue de boxe!
                    </div>
                    <div className='diretor-escritor'>
                        <div className='diretor'> Diretor: T. C. Christensen</div>
                        <div className='escritor'>Roteiro: T. C. Christensen</div>
                    </div>
                </div>

                <div className='container'>
                    <div className='img-container'>
                        <img src={calvary} className='foto' alt="Dois Papas" />
                    </div>
                    <div className='introducao'>
                        Descrição: Um padre íntegro (Brendan Gleeson) recebe uma ameaça de morte anônima e precisa confrontar uma comunidade cheia de ódio e dor. Explora profundamente temas de perdão, fé em crise e redenção.
                    </div>
                    <div className='diretor-escritor'>
                        <div className='diretor'> Diretor: John Michael McDonagh</div>
                        <div className='escritor'>Roteiro: John Michael McDonagh</div>
                    </div>
                </div>


                 <div className='container'>
                    <div className='img-container'>
                        <img src={chavory} className='foto' alt="Dois Papas" />
                    </div>
                    <div className='introducao'>
                        Descrição:Dois corredores britânicos nos Jogos Olímpicos de 1924 – um motivado pela fé (Eric Liddell) e outro por vencer o preconceito (Harold Abrahams) – com fé e perseverança como forças centrais.
                    </div>
                    <div className='diretor-escritor'>
                        <div className='diretor'> Diretor: Hugh Hudson</div>
                        <div className='escritor'>Roteiro: Colin Welland</div>
                    </div>
                </div>



                
                

            </div>
            
        </div>
    )
}

export default Semelhantes
