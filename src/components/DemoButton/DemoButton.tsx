import React from 'react';

interface DemoButtonProps{
    demoFunction: Function;    
}

export const DemoButton = (props:DemoButtonProps) =>{
    return(
        <button data-testid="demoButton" onClick={e => props.demoFunction()}>
            Click to activate Demo Function
        </button>
    )
};