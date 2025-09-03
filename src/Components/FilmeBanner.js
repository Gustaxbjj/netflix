import './FilmeBanner.css'

function FilmeBanner ({filme}){

    return(
        <div className='Banner'>
            <img src={filme.fotoThumbnail} class="BannerImg"/>
        </div>

    )

}

export default FilmeBanner