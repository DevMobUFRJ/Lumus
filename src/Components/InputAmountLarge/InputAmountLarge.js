import './InputAmountLarge.css';
import infoIcon from '../../Assets/Images/Info.png';

const InputAmount = ({ HaveInfo, TypeOfInput, amount, setAmount }) => {

  return (
    
    <div id="divPrincipal">
      <div id="divDescricao">
        <h3>{TypeOfInput}</h3>
        <img src={infoIcon} id="iconInfo" alt="Info" style={{display: HaveInfo ? 'block' : 'none'}} />
      </div>
      <div id="divInputLarge">
        <h3 className="sinais" onClick={() => setAmount(Math.max(0, amount - 1))}>-</h3>
        <h3>{amount}</h3>
        <h3 className="sinais" onClick={() => setAmount(amount + 1)}>+</h3>
      </div>
    </div>
  );
};

export default InputAmount;