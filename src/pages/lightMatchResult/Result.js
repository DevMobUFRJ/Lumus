import './Result.css';
import React from 'react';
import plus from '../../Assets/Images/plus.png';
import { Link } from 'react-router-dom';

const Result = ({angle, irc, lumen, temperature}) => {
    const texts = [
        {
            index: "1",
            text: "Lumos recomenda que você procure fontes de luz (lâmpadas/painéis) com e ssas unidades fotométricas que listamos aqui para que a luz geral do seu cômodo lhe oferte conforto lumínico!"
        }, 
        {
            index: "2",
            text: "Atualmente, todas as fontes de luz comercializadas no Brasil economizam energia, porém, se você encontrar mais de um produto com as especificações que colocamos aqui, escolha aquele com valor de potência (watts) mais baixo e garanta maior eficiência energética da sua iluminação: bom para seu bolso e para o nosso meio ambiente!"
        },
        {
            index: "3",
            text: "Você pode escolher a aparência da luz que mais lhe agrada entre amarela, neutra e branca. Caso seu ambiente seja integrado com outro de função distinta, Lumos recomenda o uso da temperatura de cor neutra."
        },
        {
            index: "4",
            text: "Os valores fornecidos seguem as normas da ABNT que considera visão regular com variação de faixa etária. Os cálculos realizados pelo Lumos não consideram variação em termos de deficiência visual."
        }
    ];

    return (
        <div className='result-screen'>
            <div className='result-screen-header'>
                <div className='result-screen-title'>
                    {texts[0].text}
                </div>
                <div className='result-screen-close'>
                    <button>
                        <Link to="/Sala">
                            <img
                            src={plus}
                            alt="Fechar"
                            className='result-screen-close-rotated'
                            />
                        </Link>
                    </button>
                </div>
            </div>
            <div className='result-screen-text'>
                {texts[1].text}
            </div>
            <div className='result-screen-grid'>
                <div className='result-screen-card'>
                    <p className='result-screen-angle'>Ângulo de Abertura do Facho de Luz</p>
                    <p className='result-screen-angle-text'>{angle}</p>
                </div>
                <div className='resul-screen-cards-asset'>
                  <div className='result-screen-card'>
                    <p className='result-screen-irc'>IRC</p>
                    <p className='result-screen-irc-text'>{irc}</p>
                  </div>
                  <div className='result-screen-card'>
                    <p className='result-screen-lumen'>Lúmen</p>
                    <p className='result-screen-lumen-text'>{lumen}</p>
                  </div>
                </div>
                <div className='result-screen-card'>
                    <p className='result-screen-temperature'>Temperatura de Cor</p>
                    <p className='result-screen-temperature-text'>{temperature}</p>
                </div>
            </div>
            <div className='result-screen-text'>
                {texts[2].text}
            </div>
            <p className='result-screen-obs'>Observação</p>
            <div className='result-screen-text'>
                {texts[3].text}
            </div>
        </div>
    );
};

export default Result;