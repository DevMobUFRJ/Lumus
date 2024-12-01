import './ResultsButton.css';
import IconSeta from '../../Assets/Images/end_icon_wrapper.png'

 const ResultsButton = () => {

    return(

        <div id='divButtonResults'>
            <h2 id='TextButtonResults'>Resultado</h2>
            <img src={IconSeta}/>
        </div>
    )
}

export default ResultsButton;