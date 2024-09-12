import React from 'react';
import StaticButton from './Buttons';
import imgtest from '../Assets/Images/Union.png';
import lampVector from '../Assets/Images/LampVector.png';
import './TopLanding.css';
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
    </div>
  );
};

export default TopLanding;