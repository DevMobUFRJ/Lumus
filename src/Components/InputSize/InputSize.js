import './InputSize.css';
import infoIcon from '../../Assets/Images/Info.png';

function analisandoTamanho(event) {
  if(event.target.value.length > 4) {
    event.target.value = event.target.value.slice(0, 4);    
  }
}

const InputSize = ({ TypeOfInput, amount, setAmount, size, setSize }) => {
  return (
    
    <div id="divPrincipalInputSize">

        <div id="divDescricao">
          <h3>Tamanho</h3>
          <img src={infoIcon} id="iconInfo" alt="Info"/>
        </div>
        <div id="divInputSize">
          <input id='inputSize' type="number" onChange={analisandoTamanho}></input>
          <h3>m²</h3>
        </div>


    </div>
  );
};

export default InputSize;