import './ButtonsRoom.css';
import { Link } from 'react-router-dom';


 const ButtonsRoom = ({colorRoom, colorKitchen, colorBedroom}) => {
 
    return(

        <div id='DivReader'>
            <h3>Escolha o cômodo</h3>

            <div id='buttons'>
                <button className='buttons-room-button' style={{ backgroundColor: colorRoom ? '#F8E6B7' : 'white' , border: colorRoom ? 'none': '2.6px solid #DBD7CE'}}> 
                    <Link className='buttons-room-button-link' to='/sala' style={{textDecoration: 'none', color: "black"}}>
                        Sala 
                    </Link>
                </button>
                
                <button className='buttons-room-button' style={{ backgroundColor: colorKitchen ? '#F8E6B7' : 'white', border: colorKitchen ? 'none': '2.6px solid #DBD7CE' }}> 
                    <Link className='buttons-room-button-link' to='/cozinha' style={{textDecoration: 'none', color: "black"}}>
                        Cozinha/Lavanderia 
                    </Link>
                </button>

                <button className='buttons-room-button' style={{ backgroundColor: colorBedroom ? '#F8E6B7'  : 'white', border: colorBedroom ? 'none': '2.6px solid #DBD7CE' }}>
                    <Link className='buttons-room-button-link' to='/quarto' style={{textDecoration: 'none', color: "black"}}>
                        Quarto
                    </Link>
                </button>    
            </div>
        </div>
    )
}

export default ButtonsRoom;