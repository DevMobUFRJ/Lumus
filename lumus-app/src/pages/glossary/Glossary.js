import React from 'react';
import './Glossary.css';
import GlossaryCard from '../../Components/Glossary/GlossaryCard';

const Glossary = () => {
    return (
      <div className='glossary-container'>
        <div className='glossary-page'>
          <GlossaryCard 
            width='95%'
            height='4rem'
            padding='0.8rem'
            borderRadius='1.3rem'
            border='1px solid gray'
            upperText='Fluxo Luminoso'
            bottomText='Lúmen (Lm)'
            dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
          />
        </div>
      </div>
    );
  };

export default Glossary;