import './MainPageHeader.css';
import mainPageHeader from '../../Assets/Images/mainPageHeader.svg'

import { Link } from 'react-router-dom';

const MainPageHeader = () => {
    return(
        <div id='container-main-page-header'>
            <Link to="/home">
              <img id="main-page-header-image" alt='Lumos' src={mainPageHeader}/>
            </Link>
        </div>
    );}


export default MainPageHeader;