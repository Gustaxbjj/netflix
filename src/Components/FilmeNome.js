import './FilmeNome.css'

function FilmeNome({filme}){

    return(
        <div className='NomeFilme'>{filme.titulo}</div>
    )

}

export default FilmeNome