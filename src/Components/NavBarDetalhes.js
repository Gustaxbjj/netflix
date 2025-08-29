import './NavDetalhes.css'
import logo from '../Imagens/netflix-logo-transparente.png'
 import icone from '../Imagens/lacasa.jpeg'
import { IoIosArrowDown } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { BsBellFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

function NavDetalhes(){

    return (
        <div className='Nav-Config2'>

        <div className='sup-direita'>
            <img src={logo} className='logotipo2'/>
            <span className='color-nav'>Navegar</span>
            < GoTriangleDown className='seta-sup'/>
        </div>

            <div className='nav-config3'>
            <IoMdSearch className='icone'/>
            <span>Buscar</span>
            <BsBellFill className='icone'/>
            <img className='icone-conta2' src={icone}/>
            <span>Talys</span>
            <IoIosArrowDown className='seta-icone2'/>
           
            </div>
            </div>
    );
}

export default NavDetalhes;