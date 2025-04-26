import React, { useState, useRef } from 'react';
import './GlossaryCard.css';
import buttonImg from '../../Assets/Images/GlossaryDropdownButton.svg';


const GlossaryCard = ({width, height, padding, borderRadius, border, upperText, bottomText, dropdownHeight, dropdownText, dropdownImg}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleClick = () => {
      setIsOpen(prev => !prev);
    };

    return (
      
      <div className='glossary-card-container'
        style={{width: width, maxHeight: height, borderRadius: borderRadius, border: border, padding: padding}}
        ref={contentRef}
      >
        <div className='glossary-card'>
            <div className='glossary-card-text-container'>
                <p id='glossary-card-upper-text'>{upperText}</p>
                <p id='glossary-card-bottom-text'>{bottomText}</p>
            </div>
            <div className='glossary-dropdown-container'>
                <div className={`glossary-dropdown ${isOpen ? "open" : ""}`} onClick={handleClick}>
                  <img src={buttonImg} className= "glossary-dropdown-button" alt='dropdown' />
                </div>
            </div>

        </div>

        <div className='dropdown-content' style={{maxHeight: isOpen ? dropdownHeight : 0}}>
            <div className='dropdown-text-container'>
                <p className={`dropdown-text ${isOpen ? "open" : ""}`}
                    style={{opacity: 0.6}}>{dropdownText}</p>
            </div>

            <div className='dropdown-image-container'>
                <img src={dropdownImg} alt='' style={{height: '5rem', width: '5rem'}} />
            </div>
        </div>
      </div>
    );
  };

export default GlossaryCard;