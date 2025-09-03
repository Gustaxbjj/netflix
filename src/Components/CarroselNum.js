import './CarroselNum.css'


function CarroselNum({ listaNumerada }) {

    let i = 1;

    const catalogoNumerado = listaNumerada.map(num =>

        <div className='conjuntoNum'>
            <span className='numero'>{i++}</span>
            <img src={num.fotoThumbnail} className="fotoNum" />
        </div>


    );

    return (

        <div className="filmes">

            <span id='title'>Brasil: top 10 em séries hoje</span>

            <div className='carroselNum'>{catalogoNumerado}</div>

        </div>



    );

}

export default CarroselNum;
