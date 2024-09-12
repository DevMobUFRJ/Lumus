import React from 'react';
import StaticButton from './Buttons';
import Board from './Board';
import imgtest from '../Assets/Images/Union.png';
import lampVector from '../Assets/Images/LampVector.png';
import './MainPage.css';
import Card from './Card';

const TopLanding = () => {
  return (
    <div className='top-landing-container'>
        <StaticButton 
          image={imgtest}
          buttonWidth={'50%'}
          buttonHeight={'4.2rem'}
          buttonBorderRadius={'3rem'}
          />
        
        <div className='card-container'
          style={{
            backgroundImage: `url(${lampVector})`,
            backgroundSize: '40%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            borderRadius: '1.4rem',
            overflow: 'hidden',
            width: '100%',
        }}>
            <div className='card'>
                <p className='card-text'>Conheça o projeto <b>Atitudes Sustentáveis!</b></p>
                <div className='button-container'>
                  <StaticButton 
                    text="Saiba mais" 
                    buttonWidth="9rem" 
                    buttonHeight="3rem" 
                    buttonBorderRadius="2rem" 
                    backgroundColor="orange" 
                  />
                </div>
            </div>
        </div>

        <div className='board-box'>
          <div className='top-boards'>
            <Board
              backgroundColor="orange"
              width="12rem"
              height="12rem"
              borderRadius="1.4rem"
              border="none"
              text="Light Match"
              fontSize="1.5rem"
              padding="1rem"
              textDivWidth="4rem"
            />

            <Board
              backgroundColor="white"
              width="12rem"
              height="12rem"
              borderRadius="1.4rem"
              border="3px solid orange"
              text="Glossário"
              fontSize="1.5rem"
              padding="1rem"
            />
          </div>

          <div className='bottom-board'>

          </div>
        </div>
    </div>
  );
};

export default TopLanding;