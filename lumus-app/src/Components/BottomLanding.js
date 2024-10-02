import React from 'react';
import lampVector from '../Assets/Images/LampVector.png';
import bottomMainLogos from '../Assets/Images/Frame470.svg';

const BottomLanding = ({
    marginTop
}) => {
  return (
    <div className='bottom-landing-container'
         style={{marginTop: marginTop}}>
       <p id='bottom-landing-text'>Veja alguns dos videos e jogos educativos 
        que disponibilizamos em nossas redes sociais</p>

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
                    <div style={{backgroundColor: 'red', width: '2rem', borderRadius: '1rem', height: '2rem'}}></div>
                
                    <div style={{backgroundColor: 'red', width: '2rem', borderRadius: '1rem', height: '2rem'}}></div>

                    <div style={{backgroundColor: 'red', width: '2rem', borderRadius: '1rem', height: '2rem'}}></div>

                    <div style={{backgroundColor: 'red', width: '2rem', borderRadius: '1rem', height: '2rem'}}></div>
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