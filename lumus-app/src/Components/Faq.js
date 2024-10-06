// src/pages/Faq.js
import arrowLeft from '../Assets/Images/ArrowLeft.png'
import plus from '../Assets/Images/plus.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleBackClick = () => {
    navigate('/');  // Navega para a rota raiz "/"
  };




  const faqs = [
    {
      question: "As embalagens das lâmpadas fornecem as informações sobre as propriedades lumínicas que aparecem no glossário do Lumos?",
      answer: `Informações que embalagens devem conter são regulamentadas no Brasil pelo INMETRO - Instituto Nacional de Metrologia, Qualidade e Tecnologia.
                  Atualmente, as portarias emitidas por essa autarquia federal contemplam a obrigatoriedade dessas informações nas embalagens de lâmpadas e isso é seguido à risca pelos fabricantes.
                  No entanto, atenção! Nem todas as fontes de luz normalmente usadas nas residências são consideradas lâmpadas.
                  É o caso dos painéis de LED.
                  LED — Luz emitida por diodos — pode adquirir qualquer formato de bulbo, inclusive assumir a forma de uma luminária.
                  Nesse caso, pode ser que o fabricante não te informe as propriedades, pois é comum a informação só ser dada quando obrigatória.
                  
                  O fabricante também pode omitir informação não obrigatória, quando ela não é relevante para o
                  produto. O grau de abertura de lâmpadas difusas
                  é um exemplo disso. Como não há risco de
                  ofuscamento, a informação não é passada.
                  Acontece, por vezes, em lâmpadas com grau igual
                  ou superior a 1200.

                  O produto também pode vir sem essas
                  informações se não tiver sido produzido no Brasil
                  e não tiver passado pelo processo habitual de
                  importação. Nesse caso, escolha outro produto
                  para garantir a qualidade de seu consumo.
                  De qualquer forma, se as informações não
                  estiverem nas embalagens, normalmente elas são
                  acessadas no site do fabricante, junto as
                  informações técnicas, pois são informações
                  requeridas pelos projetistas que trabalha com
                  iluminação.`
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
    <div id="main-screen" className="faq-container">
      <div className="faq-header">
        <div className="back-button-circle" onClick={handleBackClick}>
          <img src={arrowLeft} className="back-button" alt="Voltar" />
        </div>
        <p className="faq-header-title">FAQ</p>
      </div>
      <div id="informations">
        {faqs.map((item, index) => (
          <div key={index} id="row" className="faq-item">
            <div className="faq-question">
              <p className="faq-title-question">{item.question}</p>
              <button
                onClick={() => toggleExpand(index)}
                className="expand-icon"
              >
                <img
                  src={plus}
                  alt="Abrir"
                  className={expandedIndex === index ? "rotated" : ""}
                />
              </button>
            </div>
            {expandedIndex === index && (
              <div className={`content ${expandedIndex === index ? 'expanded' : ''}`}>
                {item.answer.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex}>{line.trim()}</p> // Renderiza cada linha em um parágrafo
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
