import React from 'react';
import './Buttons.css';

const StaticButton = ({ 
  image, 
  alternative, 
  buttonWidth, 
  buttonHeight, 
  buttonBorderRadius, 
  text, 
  backgroundColor, 
  border,
  buttonBorder,
  containerId
}) => {
  return (
    <div 
      className='button-container'
      id={containerId ? containerId : 'button-container'} 
      style={{ 
        width: buttonWidth, 
        height: buttonHeight, 
        border: border ? border : 'none'
      }}
      >
      <div 
        className="static-button" 
        style={{ 
          borderRadius: buttonBorderRadius, 
          backgroundColor: backgroundColor,
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          border: buttonBorder ? buttonBorder : '2px solid black'
        }}
      >
        {image ? (
          <img 
            src={image} 
            alt={alternative} 
            style={{ width: '50%', marginBottom: '10px' }} 
          />
        ) : (
          <div style={{ color: 'black' }}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticButton;