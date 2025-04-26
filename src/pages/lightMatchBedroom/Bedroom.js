import ButtonRoom from '../../Components/ButtonsRoom/ButtonsRoom';
import { useState } from 'react';
import InputAmount from '../../Components/InputAmount/InputAmount';
import InputAmountLarge from '../../Components/InputAmountLarge/InputAmountLarge';
import './Bedroom.css';
import ResultsButton from '../../Components/ResultsButton/ResultsButton';
import InputOption from '../../Components/InputOption/InputOption';
import InputSize from '../../Components/InputSize/InputSize';
import MainPageHeader from '../../Components/LogoLumos/MainPageHeader'
import NavBar from '../../Components/NavBar/NavBar'



const Bedroom = () => {

  
  function getInformation() {
   
    const info = {
      NumberOfPointLight: NumberOfPointLight,
      Size: document.getElementById("inputSize").value,
      AmountOfLampsPerPoint: AmountOfLampsPerPoint,
      AmountOfDarkSurface: AmountOfDarkSurface,
      DescriptionLuminaria: document.getElementsByClassName("custom-select")[0].value,
      DescriptionAge: document.getElementsByClassName("custom-select")[1].value,
    }

    console.log(info);
  
    return info;
  }



  const InputOption1 = {
    titulo: "Descreva sua luminária",
    opcoes: ["Fechada (a lâmpada não fica visível)", "Aberta (a lâmpada fica visível)"]
  }

  const InputOption2  = {
    titulo: "Faixa etária dos residentes",
    opcoes: ["Uso preferencial de idosos", "Uso misto", "Uso preferencial de crianças"]
  }

  const [NumberOfPointLight, setNumberOfPointLight] = useState(0);
  const [AmountOfLampsPerPoint, setAmountOfLampsPerPoint] = useState(0);
  const [AmountOfDarkSurface, setAAmountOfDarkSurface] = useState(0);


  return (
    <div id='divLightMatch'>
        <MainPageHeader />
        
        <div id='divButtonRoom'>
            <ButtonRoom colorRoom={false} colorKitchen={false} corBedroom={true}/>
        </div>

        <h3 className='infoComodo'>Informações sobre o cômodo</h3>

      <form name="valform" id='formData'>
        <div id="divSizeAndAmount"> 
        <InputAmount TypeOfInput={"Nº de pontos de luz"} amount={NumberOfPointLight} setAmount={setNumberOfPointLight} />
        <InputSize />
        </div>
        <InputAmountLarge amount={AmountOfLampsPerPoint} setAmount={setAmountOfLampsPerPoint} HaveInfo={false} TypeOfInput={"Quantidade de lâmpadas por ponto"}/>
        <InputOption nameOfInput={InputOption1.titulo} optionsArray={InputOption1.opcoes}/>
        <InputAmountLarge amount={AmountOfDarkSurface} setAmount={setAAmountOfDarkSurface} HaveInfo={true} TypeOfInput={"Quantidade de superfícies escuras"}/>
        <InputOption nameOfInput={InputOption2.titulo} optionsArray={InputOption2.opcoes}/>
        
        <div id='divbotao' onClick={getInformation}>
          <ResultsButton />
        </div>
      </form >

      <NavBar colorFaq={false} colorGlossario={false} colorHome={false} colorLightMatch={true}/>


    </div>
  );
};

export default Bedroom;