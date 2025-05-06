import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CalcResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { info } = location.state;

  useEffect(() => {
    let lux;
    let temperature;
    if(info.Ambient === 'Bedroom'){
        lux = info.DescriptionAge === 'Uso preferencial de idosos'
          ? 200
          : info.DescriptionAge === 'Uso preferencial de crianças'
          ? 100
          : 150;
        temperature = '2700K a 4000K';
    } else if(info.Ambient === 'Kitchen'){
        lux = info.DescriptionAge === 'Uso preferencial de idosos' ? 500 : 300;
        temperature = '4000K a 6500K';
    } else {
        lux = info.DescriptionAge === 'Uso preferencial de idosos' ? 200 : 150;
        temperature = '2700K a 4000K';
    }

    const fd = info.DescriptionLuminaria === 'Aberta (a lâmpada fica visível)' ? 0.89 : 0.88;

    const size = parseFloat(info.Size);
    const lmi = (lux * size) / (info.NumberOfPointLight * info.AmountOfLampsPerPoint * fd);
    const lumen = Math.floor(lmi);

    navigate('/result', {
      state: {
        angle: 'Maior ou igual a 120°',
        irc: '80 RA',
        lumen: `${lumen} Lm`,
        temperature: `${temperature}`
      }
    });
  }, [info, navigate]);

  return null;
};

export default CalcResult;
