import React from 'react'

const onClick =(ev,id) => {      // learn how to pass one or more parameters into a react event
    debugger;
    alert('on Click' + id);
}
const GameCircle = ({id, color, children}) => {
    console.log(id);
    return (
        <div style={{backgroundColor: color, width: 100, height: 100, margin: 100}} onClick={(ev) => onClick(id, ev)}>  
            {children}
        </div>
    )
}

export default GameCircle;