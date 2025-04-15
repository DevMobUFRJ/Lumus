
import './InputAmount.css';
import infoIcon from '../../Assets/Images/Info.png';

const InputAmount = ({ TypeOfInput, amount, setAmount, size, setSize }) => {
  return (
    
    <div id="divPrincipalInputAmount">

        <div id="divDescricao">
          <h3>{TypeOfInput}</h3>
          <img src={infoIcon} id="iconInfo" alt="Info"/>
        </div>
        <div id="divInput">
          <h3 className="sinais" onClick={() => setAmount(Math.max(0, amount - 1))}>-</h3>
          <h3>{amount}</h3>
          <h3 className="sinais" onClick={() => setAmount(amount + 1)}>+</h3>
        </div>


    </div>
  );
};

export default InputAmount;