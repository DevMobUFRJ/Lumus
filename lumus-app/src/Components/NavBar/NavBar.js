import './NavBar.css';
import IconFaq from '../../Assets/Images/iconwrapper.png'
import IconLightMatch  from '../../Assets/Images/iconwrapper(2).png'
import IconGlossario  from '../../Assets/Images/iconwrapper(1).png'
import IconHome  from '../../Assets/Images/iconwrapper(3).png'

const NavBar = ({ colorHome, colorFaq, colorLightMatch, colorGlossario }) => {

    const iconStyle = {
        filter: 'invert(36%) sepia(27%) saturate(6652%) hue-rotate(26deg) brightness(98%) contrast(98%)'
      };

    const teste = {
        backgroundColor: 'black'
    }

    return (
      <nav id='navBar'>
        <button className="nav-button" style={{ backgroundColor: colorHome ? '#F9E4B2' : 'white' }}>
          <img src={IconHome} alt="Home" style={{iconStyle}} className={`nav-icon ${colorHome ? 'icon-active' : ''}`}/>
        </button>
        <button className="nav-button" style={{ backgroundColor: colorGlossario ? '#F9E4B2' : 'white' }}>
          <img src={IconGlossario} alt="Glossário" style={{iconStyle}} className={`nav-icon ${colorGlossario ? 'icon-active' : ''}`}/>
        </button>
        <button className="nav-button nav-button-center" style={{backgroundColor: colorLightMatch ? '#F9E4B2' : 'white' }}>
          <img src={IconLightMatch} alt="Light Match" style={{iconStyle}} className={`nav-icon ${colorLightMatch ? 'icon-active' : ''}`}/>
        </button>
        <button className="nav-button" style={{ backgroundColor: colorFaq ? '#F9E4B2' : 'white' }}>
          <img src={IconFaq} alt="FAQ" style={{iconStyle}} className={`nav-icon ${colorFaq ? 'icon-active' : ''}`}/>
        </button>
      </nav>
    );
  }
  
  export default NavBar;