import './ButtonsRoom.css';
import { useNavigate } from 'react-router-dom';


const ButtonsRoom = ({colorRoom, colorKitchen, colorBedroom}) => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path)
    }
    
    return(
        <div id='DivReader'>
            <h3>Escolha o cômodo</h3>

            <div id='buttons'>
                <button className='buttons-room-button' onClick={() => handleButtonClick('/sala')} style={{ backgroundColor: colorRoom ? '#F8E6B7' : 'white' , border: colorRoom ? 'none': '2.6px solid #DBD7CE'}}> 
                    Sala
                </button>
                
                <button className='buttons-room-button' onClick={() => handleButtonClick('/cozinha')} style={{ backgroundColor: colorKitchen ? '#F8E6B7' : 'white', border: colorKitchen ? 'none': '2.6px solid #DBD7CE' }}> 
                    Cozinha/Lavanderia
                </button>

                <button className='buttons-room-button' onClick={() => handleButtonClick('/quarto')} style={{ backgroundColor: colorBedroom ? '#F8E6B7'  : 'white', border: colorBedroom ? 'none': '2.6px solid #DBD7CE' }}>
                    Quarto
                </button>    
            </div>
        </div>
    )
}

export default ButtonsRoom;