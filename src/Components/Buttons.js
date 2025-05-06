import React from 'react';
import './Buttons.css';

const StaticButton = ({ 
  image, 
  alternative, 
  buttonWidth, 
  buttonHeight, 
  buttonBorderRadius, 
  text, 
  fontSize,
  backgroundColor, 
  border,
  buttonBorder,
  containerId,
  marginLeft
}) => {
  return (
    <div 
      className='button-container'
      id={containerId ? containerId : 'button-container'} 
      style={{ 
        width: buttonWidth, 
        height: buttonHeight, 
        border: border ? border : 'none',
        marginLeft: marginLeft ? marginLeft : '0rem'
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
          <div className="static_button_text" style={{ color: 'black', fontSize: fontSize }}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticButton;