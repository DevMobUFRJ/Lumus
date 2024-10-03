import './ButtonsRoom.css';
import { Link } from 'react-router-dom';


 const ButtonsRoom = ({colorRoom, colorKitchen, corBedroom}) => {
 
    return(

        <div id='DivReader'>
            <h3>Escolha o cômodo</h3>
            <div id='buttons'>
            <button style={{ backgroundColor: colorRoom ? '#F8E6B7' : 'white' , border: colorRoom ? 'none': '2.6px solid #DBD7CE'}}> <Link to='/' style={{textDecoration: 'none', color: "black"}}>Sala </Link></button>
            <button style={{ backgroundColor: colorKitchen ? '#F8E6B7' : 'white', border: colorKitchen ? 'none': '2.6px solid #DBD7CE' }}> <Link to='/cozinha' style={{textDecoration: 'none', color: "black"}}>Cozinha/Lavanderia </Link></button>
            <button style={{ backgroundColor: corBedroom ? '#F8E6B7'  : 'white', border: corBedroom ? 'none': '2.6px solid #DBD7CE' }}><Link to='/quarto' style={{textDecoration: 'none', color: "black"}}>Quarto</Link></button>
                
            </div>

        </div>
    )
}

export default ButtonsRoom;