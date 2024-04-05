import React, {useState} from "react";

import '../Game.css';

import Header  from "./Header";
import Footer  from "./Footer";

import GameCircle from "./GameCircle";

const no_circles = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard =() => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    console.log(gameBoard);


    const initBoard = () => {
        const circles = [];

        for (let i=0; i <no_circles; i++){
            circles.push(renderCircle(i));
        }
        return circles;
    }

    


    const circleClicked = (id) => {
        //debugger;
        console.log('circle clicked:' +id);

       

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if(pos === id) return currentPlayer;
                return circle;
            })
        })

       setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1 );

        console.log(gameBoard);
        console.log(currentPlayer);
    }

    const renderCircle = id => {
        return <GameCircle key = {id} id={id} className= {`player_${gameBoard[id]}`} onCircleClicked={circleClicked}/>
    }
   
    return(
        <>
           <Header />
           <div className="gameBoard" >
           {  initBoard()};
     
           </div>
           <Footer />
        </>
    )
}

export default GameBoard;