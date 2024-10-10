import React from 'react';
import './Home.css';

const Board = ({image, backgroundColor, width, height, borderRadius, border, text, fontSize, padding, textDivWidth, textDivHeight, imgBorder, imgColor}) => {
    return (
      
      <div className='board-container'
        style={{width: width, height: height, borderRadius: borderRadius, backgroundColor: backgroundColor, border: border}}
      >
        <div className='board'
        style={{padding: padding}}>
            <div className='board-image-container'>
                <div className='board-button' style={{border: imgBorder ? imgBorder : 'None', backgroundColor: imgColor ? imgColor : ''}}>
                  <img className='board-image'
                      src={image} 
                  />
                </div>
            </div>
            <div className='board-text' style={{width: textDivWidth ? textDivWidth : '100%', height: textDivHeight ? textDivHeight : '5.5rem'}}>
                <p style={{fontSize: fontSize, fontWeight: '600'}}>{text}</p>
            </div>
        </div>
      </div>
    );
  };

export default Board;