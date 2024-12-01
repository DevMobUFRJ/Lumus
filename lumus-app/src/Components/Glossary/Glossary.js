import React from 'react';
import './Glossary.css';
import GlossaryCard from './GlossaryCard';

const Glossary = () => {
    return (
      <div className='glossary-container'>
        <div className='glossary-page'>
            <div className='glossary-page-cards'>
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

                <GlossaryCard 
                    width='95%'
                    height='4rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Fluxo Energético ou Potência'
                    bottomText='Watts (w)'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />

                <GlossaryCard 
                    width='95%'
                    height='4rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Intensidade Luminosa'
                    bottomText='Candela (Cd)'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />

                <GlossaryCard 
                    width='95%'
                    height='4rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Temperatura de Cor ou Aparência da Cor da Emissão da Luz'
                    bottomText='Kelvin (K)'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />

                <GlossaryCard 
                    width='95%'
                    height='4rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Índice de Reprodução de Cor ou IRC'
                    bottomText='RA'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />
            </div>
        </div>
      </div>
    );
  };

export default Glossary;