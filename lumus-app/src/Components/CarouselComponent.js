import React from 'react';
import StaticButton from './Buttons';
import './Home.css';

const CarouselComponent = ({image, text, buttonText, buttonWidth, buttonHeight, buttonBorderRadius}) => {
    const padding = 2;
    return (

      <div className='carousel-container'
        style={{width: "20.5" -2*padding + "rem", height: "20.5" -2*padding + "rem", borderRadius: "2rem", backgroundImage: `url(${image})`, backgroundSize: "103%", border: "none", padding: padding + "rem"}}
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

export default CarouselComponent;