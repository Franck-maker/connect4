import React from 'react'
import '../Game.css';

const onClick =(ev,id) => {     
    
    alert('on Click' + id);
}
const GameCircle = ({id, children}) => {
   
    return (
        <div className= {`gameCircle ${id % 2 === 0 ? "odd" :"even"}`} onClick={(ev) => onClick(id, ev)}>  
            {children}
        </div>
       
    )
}

export default GameCircle;