import ComentariosService from '../Services/ComentariosService';
import './ComentariosContainer.css'
import { FaStar } from "react-icons/fa";

function ComentariosContainer({ filme }) {

  const comentarios = ComentariosService.getByFilmeId(filme.id);

  return (
    <div className="comentario-container">
      {

        comentarios.map((comentario, idx) => (

          <div className='comentario' key={idx}>
            <div className="comentario-header">
              <strong>{comentario.autor}</strong>
            </div>

            <p className="comentario-texto">{comentario.texto}</p>

            <span className="comentario-data">{comentario.data_comentario}</span>

            <div className='estrelas'>
              {
                Array.from({ length: comentario.avaliacao }).map((_, i) => (
                  <FaStar key={i} className='estrela' />
                ))
              }

              <span>{comentario.avaliacao}</span>
            </div>

          </div>

        ))
      }
    </div>
  );
}

export default ComentariosContainer;
