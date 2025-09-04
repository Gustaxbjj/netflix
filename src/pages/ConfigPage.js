import './ConfigPage.css';
import MenuLateral from '../Components/MenuLateral';
import BarraConfig from '../Components/BarraConfig';
import Conta from '../Components/Conta'

function ConfigPage() {
    
    return(
        
        <div className='configuracoes'>
            
            <div>
                <BarraConfig />
            </div>

            <div className='grupo1'>

                    <div>

                        <MenuLateral />

                    </div>

                    <div className='pai-conta'>


                        <Conta />

                    </div>  

            </div>
        
        </div>
    );
}

export default ConfigPage;