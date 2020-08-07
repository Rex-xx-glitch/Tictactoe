import React from 'react';

export default function PlayerArrow({currentPlayer}){
    return (
        <div className="arrow-container"> 
        <div className="circle-arrow-comp">
            <span>{currentPlayer}</span>
            <div className={currentPlayer === 1 ? "arrow left-arrow" : "arrow right-arrow"}></div>
        </div>
        </div>
    );
}