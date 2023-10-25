import React from 'react'

const onClick =(id) => {      // learn how to pass one or more parameters into a react event
    debugger;
    alert('on Click' + id);
}
const GameCircle = ({id, color, children}) => {
    console.log(id);
    return (
        <div style={{backgroundColor: color}} onClick={() => onClick(id)}>  
            {children}
        </div>
    )
}

export default GameCircle;