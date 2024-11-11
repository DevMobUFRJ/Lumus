import './NavBar.css';
import IconFaq from '../../Assets/Images/iconwrapper.png'
import IconLightMatch  from '../../Assets/Images/iconwrapper(2).png'
import IconGlossario  from '../../Assets/Images/iconwrapper(1).png'
import IconHome  from '../../Assets/Images/iconwrapper(3).png'
import { Link } from 'react-router-dom';

const NavBar = ({ colorHome, colorFaq, colorLightMatch, colorGlossario }) => {

    const iconStyle = {
        filter: 'invert(36%) sepia(27%) saturate(6652%) hue-rotate(26deg) brightness(98%) contrast(98%)'
      };

    return (
      <nav id='navBar'>
        <button className="nav-button" style={{ backgroundColor: colorHome ? '#F9E4B2' : 'white' }}>
          <Link to="/home">
            <img src={IconHome} alt="Home" style={{iconStyle}} className={`nav-icon ${colorHome ? 'icon-active' : ''}`}/>
          </Link>
        </button>
        
        <button className="nav-button" style={{ backgroundColor: colorGlossario ? '#F9E4B2' : 'white' }}>
          <Link to="/">
            <img src={IconGlossario} alt="Glossário" style={{iconStyle}} className={`nav-icon ${colorGlossario ? 'icon-active' : ''}`}/>
          </Link>
        </button>

        <button className="nav-button nav-button-center" style={{backgroundColor: colorLightMatch ? '#F9E4B2' : 'white' }}>
          <Link to="/Sala">
            <img src={IconLightMatch} alt="Light Match" style={{iconStyle}} className={`nav-icon ${colorLightMatch ? 'icon-active' : ''}`}/>
          </Link>
        </button>

        <button className="nav-button" style={{ backgroundColor: colorFaq ? '#F9E4B2' : 'white' }}>
          <Link to="/Faq">
            <img src={IconFaq} alt="FAQ" style={{iconStyle}} className={`nav-icon ${colorFaq ? 'icon-active' : ''}`}/>
          </Link>
        </button>
      </nav>
    );
  }
  
  export default NavBar;