import React from 'react';
import './Buttons.css';

const StaticButton = ({ image, alternative, buttonWidth, buttonHeight, buttonBorderRadius}) => {
  return (
    
    <div className='button-container'
      style={{width: buttonWidth, height: buttonHeight}}
    >
      <div className="static-button" style={{borderRadius: buttonBorderRadius}}>
        <img src={image} alt={alternative} style={{ width: '50%', marginBottom: '10px'}} />
      </div>
    </div>
  );
};

export default StaticButton;