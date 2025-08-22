import './CardComentario.css'
import { FaStar } from "react-icons/fa";

function ComentarioCard() {
  return (
    <div className="comentario-card">

    <div className='comentario'>
        
   <div className="comentario-header">
        <strong>{'@Talys'}</strong>
      </div>
      <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
         <span className="comentario-data">{"20/08/2025"}</span>
      
            <div className='estrelas'>
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <span>{"4"}</span>
            </div>
       
         
         

    </div>

    <div className='comentario'>
        
         <div className="comentario-header">
             <strong>{'@Elijamerson'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"22/08/2025"}</span>
             
               <div className='estrelas'>
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <span>{"5"}</span>
            </div>

    </div>

       <div className='comentario'>
        
         <div className="comentario-header">
             <strong>{'@Adonai'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"27/08/2025"}</span>

               <div className='estrelas'>
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <span>{"4"}</span>
            </div>

    </div>

       <div className='comentario'>
        
         <div className="comentario-header">
             <strong>{'@Matheus'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"29/08/2025"}</span>

               <div className='estrelas'>
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               
               <span>{"3"}</span>
            </div>

    </div>

       <div className='comentario'>
        
         <div className="comentario-header">
             <strong>{'@Gabriel Felipe'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"01/08/2025"}</span>

               <div className='estrelas'>
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <FaStar className='estrela' />
               <span>{"5"}</span>
            </div>

    </div>
    

    </div>
  );
}

export default ComentarioCard;
