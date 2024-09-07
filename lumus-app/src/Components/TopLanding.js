import React from 'react';
import StaticButton from './Buttons';
import imgtest from '../Assets/Images/Union.png';
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
        
        <div className='card-container'>
            <div className='card'>
                <p className=''>Conheça o projeto Atitudes Sustentáveis!</p>
            </div>
        </div>
    </div>
  );
};

export default TopLanding;