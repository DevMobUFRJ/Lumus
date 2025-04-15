import React from 'react';
import lampVector from '../Assets/Images/LampVector.png';
import bottomMainLogos from '../Assets/Images/Frame470.svg';
import instagram from '../Assets/Images/instagram-logo.svg';
import youtube from '../Assets/Images/youtube-logo.svg';
import tiktok from '../Assets/Images/tiktok-logo.svg';
import green from '../Assets/Images/green-logo.svg';
import lampCarousel from '../Assets/Images/frame41.png';
import Carousel from './Carousel';

const BottomLanding = ({
    marginTop
}) => {
  return (
    <div className='bottom-landing-container'
         style={{marginTop: marginTop}}>
       <p id='bottom-landing-text'>Veja alguns dos videos e jogos educativos 
        que disponibilizamos em nossas redes sociais</p>

        <Carousel
        />

        <div className='text-container' id='carousel-link'>
          <p style={{textDecoration: 'underline'}}>Ver todos</p>
          <p>→</p>
        </div>

        <div className='card-container'
          style={{
            backgroundImage: `url(${lampVector})`,
            backgroundSize: '43%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            borderRadius: '1.4rem',
            overflow: 'hidden',
            width: '100%',
        }}>
            <div className='card'>
                <p className='card-text' style={{fontSize: '1.5rem'}}>Acompanhe nossas redes sociais!</p>
                <div id='lamp-card-buttons-container'>
                    <div className='cardButtonImageContainer'>
                      <img src={instagram}></img>
                    </div>
                
                    <div className='cardButtonImageContainer'>
                      <img src={youtube}></img>
                    </div>

                    <div className='cardButtonImageContainer'>
                      <img src={tiktok}></img>
                    </div>

                    <div className='cardButtonImageContainer'>
                      <img src={green}></img>
                    </div>
                </div>
            </div>
          </div>
          <div id='bottom_logos'>
            <img src={bottomMainLogos}
                style={{ width: '100%'}}/>
          </div>
    </div>

  );
};

export default BottomLanding;