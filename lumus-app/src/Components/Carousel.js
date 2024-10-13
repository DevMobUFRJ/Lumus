import React from 'react';
import StaticButton from './Buttons';
import './Home.css';

const Carousel = ({image, width, height, borderRadius, border, text, buttonText, buttonWidth, buttonHeight, buttonBorderRadius, padding}) => {
    return (
      
      <div className='carousel-container'
        style={{width: width -2*padding + "rem", height: height -2*padding + "rem", borderRadius: borderRadius, backgroundImage: `url(${image})`, backgroundSize: "103%", border: border, padding: padding + "rem"}}
      >
        <p id='carousel-text'>{text}</p>
        <div className='carousel-buttons'>
            <p className='lab-ca'>labCA</p>
            <StaticButton 
                text={buttonText + " →"} 
                buttonWidth={buttonWidth} 
                buttonHeight={buttonHeight} 
                buttonBorderRadius={buttonBorderRadius}
                backgroundColor="#FEB800" 
                buttonBorder="none"
            />
        </div>
      </div>
    );
  };

export default Carousel;