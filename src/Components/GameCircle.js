import React from 'react'

const onClick =(id, value) => {      // learn how to pass one or more parameters into a react event
    debugger;
    alert('on Click' + id);
}
const GameCircle = ({id, value, children}) => {
    console.log(id);
    return (
        <div onClick={() => onClick(id, value)}>  
            {children}
        </div>
    )
}

export default GameCircle;