import React from 'react';
import './Glossary.css';
import GlossaryCard from './GlossaryCard';

const Glossary = () => {
    return (
      <div className='glossary-container'>
        <div className='glossary-page'>
            <div className='glossary-page-upper-text-container'>
                <p className='glossary-page-upper-text'>
                    Explore nosso glossário e descubra a importância das informações que vem nas embalagens dos 
                    produtos:
                </p>
            </div>

            <div className='glossary-page-cards'>
                <GlossaryCard 
                    width='100%'
                    height='4rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Fluxo Luminoso'
                    bottomText='Lúmen (Lm)'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />

                <GlossaryCard 
                    width='100%'
                    height='4rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Fluxo Energético ou Potência'
                    bottomText='Watts (w)'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />

                <GlossaryCard 
                    width='100%'
                    height='4rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Intensidade Luminosa'
                    bottomText='Candela (Cd)'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />

                <GlossaryCard 
                    width='100%'
                    height='5.5rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Temperatura de Cor ou Aparência da Cor da Emissão da Luz'
                    bottomText='Kelvin (K)'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />

                <GlossaryCard 
                    width='100%'
                    height='5.3rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    border='1px solid gray'
                    upperText='Índice de Reprodução de Cor ou IRC'
                    bottomText='RA'
                    dropdownText='teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
                />
            </div>

            <div className='glossary-page-bottom-text-container'>
                <p className='glossary-page-bottom-text'>
                    Essas são as propriedades lumínicas que você precisa considerar ao adquirir uma equipamento de iluminação. Elas interagem com as superfícies iluminadas e promovem o estímulo lumínico que é captado pelo seu olho e interpretado pelo seu cérebro para gerar sensações. Se a luz percebida por você gera sensação de bem estar, essa luz oferece conforto lumínico, isto é, saúde tanto física(saúde da visão) quanto psicológica. 

                    Sempre selecione equipamentos que são fonte de luz considerando suas unidades fotométricas que medem essas propriedades que listamos aqui e escolha dentro dessa seleção o que apresentar maior rendimento luminoso, isto é maior eficiência energética. No entanto nunca consuma um equipamento só pela eficiência energética. Antes de tudo a iluminação precisa ser eficiente, isto é a luz tem que estar adequada! 

                    Lumos vai ajudar você a encontrar a luz geral mais adequada para seu ambiente!
                </p>
            </div>
        </div>
      </div>
    );
  };

export default Glossary;