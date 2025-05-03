import React from 'react';
import StaticButton from './Buttons';
import './Home.css';

const CarouselComponent = ({image, text, buttonText, buttonWidth, buttonHeight, buttonBorderRadius}) => {
    const padding = 1;
    return (

      <div className='carousel-container'
        style={{width: "21.5" -2*padding + "rem", height: "21.5" -2*padding + "rem", borderRadius: "2rem", backgroundImage: `url(${image})`, backgroundSize: "110%", border: "none", padding: padding + "rem"}}
      >
        <p id='carousel-text'>{text}</p>
        <div className='carousel-buttons'>
            <p className='lab-ca'>LabCA</p>
            <StaticButton 
                text={buttonText + " →"}
                fontSize="0.88rem"
                buttonWidth={buttonWidth} 
                buttonHeight={buttonHeight} 
                buttonBorderRadius={buttonBorderRadius}
                backgroundColor="#FEB800" 
                buttonBorder="none"
                marginLeft="1.8rem"
            />
        </div>
      </div>
    );
  };

export default CarouselComponent;