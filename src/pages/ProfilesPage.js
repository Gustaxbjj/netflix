import "./ProfilesPage.css";

import eleven from '../Imagens/eleven.jpeg';
import lacasa from '../Imagens/lacasa.jpeg';
import kids from '../Imagens/kids.png';
import adiconar from '../Imagens/+.png';
import SelecaoPerfil from "../Components/SelecaoPerfil";

function ProfilePage () {
  
  const usuario1 = {
    nome: 'Guilherme',
    foto: eleven
    
  };
  const usuario2 = {
    nome: 'Givanildo',
    foto: lacasa
    
  };
  const perfilkids = {
    nome: 'Kids',
    foto: kids
    
  };
  const adicionarperfil = {
    nome: 'Adicionar Perfil',
    foto: adiconar
    
  };
      
      const usuarios = [usuario1, usuario2, perfilkids, adicionarperfil]
      
      return( 
       <SelecaoPerfil listaDeUsuarios={usuarios}/>
       
      );
};

   

export default ProfilePage;