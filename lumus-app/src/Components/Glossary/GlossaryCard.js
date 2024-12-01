import React from 'react';
import './GlossaryCard.css';

const GlossaryCard = ({width, height, padding, borderRadius, border, upperText, bottomText, dropdownText, dropdownImg}) => {
    return (
      
      <div className='glossary-card-container'
        style={{width: width, maxHeight: height, borderRadius: borderRadius, border: border, padding: padding}}
      >
        <div className='glossary-card'>
            <div className='text-container'>
                <p>{upperText}</p>
                <p>{bottomText}</p>
            </div>
            <div className='glossary-dropdown-container'>
                <div className='glossary-dropdown'>
                    V
                </div>
            </div>

        </div>

        <div className='dropdown-content'>
            <div className='dropdown-text-container'>
                <p>{dropdownText}</p>
            </div>

            <div className='dropdown-image-container'>
                <div style={{backgroundImage: dropdownImg}}>
            </div>
            </div>
        </div>
      </div>
    );
  };

export default GlossaryCard;