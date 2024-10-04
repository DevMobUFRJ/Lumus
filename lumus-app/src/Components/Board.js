import React from 'react';
import './Home.css';

const Board = ({image, backgroundColor, width, height, borderRadius, border, text, fontSize, padding, textDivWidth}) => {
    return (
      
      <div className='board-container'
        style={{width: width, height: height, borderRadius: borderRadius, backgroundColor: backgroundColor, border: border}}
      >
        <div className='board'
        style={{padding: padding}}>
            <div style={{width: '100%', height:'50%', display: 'flex', alignItems: 'left', justifyContent: 'left', backgroundColor:'red'}}>
                <img 
                    src={image} 
                />
            </div>
            <div style={{width: textDivWidth ? textDivWidth : '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <p style={{fontSize: fontSize}}>{text}</p>
            </div>
        </div>
      </div>
    );
  };

export default Board;