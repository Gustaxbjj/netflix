import './CardComentario.css'

function ComentarioCard({ autor, texto, data }) {
  return (
    <div className="comentario-card">

    <div className='comentario1'>
        
   <div className="comentario-header">
        <strong>{'@Talys'}</strong>
      </div>
      <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
         <span className="comentario-data">{"20/08/2025"}</span>

    </div>

    <div className='comentario2'>
        
         <div className="comentario-header">
             <strong>{'@Elijamerson'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"22/08/2025"}</span>

    </div>

       <div className='comentario3'>
        
         <div className="comentario-header">
             <strong>{'@Adonai'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"27/08/2025"}</span>

    </div>

       <div className='comentario4'>
        
         <div className="comentario-header">
             <strong>{'@Matheus'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"29/08/2025"}</span>

    </div>

       <div className='comentario5'>
        
         <div className="comentario-header">
             <strong>{'@Gabriel Felipe'}</strong>
         </div>
             <p className="comentario-texto">{'Um filme emocionante que mostra a força da fé diante das maiores adversidades. As atuações são poderosas e a história inspira coragem e esperança. Realmente toca o coração!'}</p>
             <span className="comentario-data">{"01/08/2025"}</span>

    </div>
    

    </div>
  );
}

export default ComentarioCard;
