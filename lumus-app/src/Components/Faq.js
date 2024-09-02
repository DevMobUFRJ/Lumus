// src/pages/Faq.js

import React, { useState } from 'react';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "As embalagens das lâmpadas fornecem as informações sobre as propriedades lumínicas que aparecem no glossário do Lumos?",
      answer: "Sim, as embalagens das lâmpadas geralmente contêm informações sobre suas propriedades lumínicas, como intensidade e distribuição da luz, que são explicadas no glossário do Lumos."
    },
    {
      question: "Posso escolher as lâmpadas por sua eficiência energética (rendimento luminoso)?",
      answer: "Sim, a eficiência energética das lâmpadas é uma medida importante. Ela indica o quanto de luz é produzida por unidade de energia consumida, o que ajuda a escolher lâmpadas mais eficientes."
    },
    {
      question: "Por que não encontro mais lâmpadas incandescentes para consumo nas lojas?",
      answer: "Lâmpadas incandescentes foram progressivamente retiradas do mercado devido a seu baixo rendimento energético. Elas são menos eficientes em comparação com tecnologias mais recentes, como LED e CFL."
    },
    {
      question: "Porque não posso escolher minha fonte de luz apenas pela potência (watts)? Porque tenho que conhecer as demais unidades fotométricas da fonte de luz que pretendo adquirir?",
      answer: "A potência (watts) indica o consumo de energia, mas não necessariamente a quantidade de luz emitida. Unidades fotométricas como lúmens e lux são mais relevantes para avaliar a eficiência da iluminação."
    },
    {
      question: "Qual a diferença entre luz geral e luz de destaque?",
      answer: "A luz geral ilumina amplamente um espaço, enquanto a luz de destaque é usada para enfatizar áreas específicas ou objetos, criando contrastes e pontos de interesse."
    },
    {
      question: "Preciso verificar as propriedades lumínicas quando for comprar um painel de LED?",
      answer: "Sim, é importante verificar as propriedades lumínicas dos painéis de LED para garantir que atendam às suas necessidades em termos de brilho, cor e distribuição da luz."
    },
    {
      question: "O que é luz geral?",
      answer: "Luz geral refere-se à iluminação básica de um ambiente, fornecendo uma iluminação uniforme para permitir atividades diárias sem criar sombras fortes."
    },
    {
      question: "O projeto Atitudes Sustentáveis desenvolve projeto de iluminação?",
      answer: "Sim, o projeto Atitudes Sustentáveis pode desenvolver projetos de iluminação, focando em soluções eficientes e sustentáveis para diferentes tipos de espaços."
    }
  ];

  return (
    <div id="main-screen">
      <h1>FAQ</h1>
      <div id="informations">
        {faqs.map((item, index) => (
          <div key={index} id="row">
            <p>{item.question}</p>
            <button 
              id="plus-icon" 
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? 'X' : '+'}
            </button>
            {expandedIndex === index && (
              <div className="content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
