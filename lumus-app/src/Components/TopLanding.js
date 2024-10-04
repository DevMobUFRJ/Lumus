import React from 'react';
import StaticButton from './Buttons';
import Board from './Board';
import mainPageHeader from '../Assets/Images/mainPageHeader.svg';
import lampVector from '../Assets/Images/LampVector.png';
import lightMatch from '../Assets/Images/nav-lightmatch.svg';
import glossario from '../Assets/Images/nav-glossario.svg';
import faq from '../Assets/Images/nav-faq.svg';
import './Home.css';
import Card from './Card';

const TopLanding = () => {
  return (
    <div className='top-landing-container'>
        <div id='top-button-container'>
          <img src={mainPageHeader} />
        </div>
        
        <div className='card-container'
          style={{
            backgroundImage: `url(${lampVector})`,
            backgroundSize: '43%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            borderRadius: '1.4rem',
            overflow: 'hidden',
            width: '100%',
        }}>
            <div className='card'>
                <p className='card-text'>Conheça o projeto <b>Atitudes Sustentáveis!</b></p>
                <div className='button-container'
                style={{marginTop: '-0.6rem'}}>
                  <StaticButton 
                    text="Saiba mais →" 
                    buttonWidth="9rem" 
                    buttonHeight="3rem" 
                    buttonBorderRadius="2rem" 
                    backgroundColor="orange" 
                    buttonBorder="none"
                  />
                </div>
            </div>
        </div>

        <div className='board-box'>
          <div id='top-boards'>
            <Board
              backgroundColor="orange"
              width="11rem"
              height="11.5rem"
              borderRadius="1.4rem"
              border="none"
              text="Light Match"
              fontSize="1.5rem"
              padding="1rem"
              textDivWidth="4rem"
              image={lightMatch}
            />

            <Board
              backgroundColor="white"
              width="11rem"
              height="11.5rem"
              borderRadius="1.4rem"
              border="3px solid orange"
              text="Glossário"
              fontSize="1.5rem"
              padding="1rem"
              image={glossario}
            />
          </div>

          <div id='bottom-board'>
            <Board
              backgroundColor="white"
              width="100%"
              height="11.5rem"
              borderRadius="1.4rem"
              border="3px solid orange"
              text="FAQ"
              fontSize="1.5rem"
              padding="1rem"
              image={faq}
            />
          </div>
        </div>
    </div>
  );
};

export default TopLanding;