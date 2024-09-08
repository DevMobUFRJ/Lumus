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
            backgroundImage: lampVector,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            overflow: 'hidden',
            width: '100%',
            height: '300px'
        }}>
            <div className='card'>
                <p className='card-text'>Conheça o projeto <b>Atitudes Sustentáveis!</b></p>
                <div style={{width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
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