import React from 'react';
import './Home.css';

const Card = ({image, width, height, borderRadius, border, text}) => {
    return (
      
      <div className='card-container'
        style={{width: width, height: height, borderRadius: borderRadius, backgroundImage: image, border: border, backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className='card'>
            <p>{text}</p>
        </div>
      </div>
    );
  };

export default Card;