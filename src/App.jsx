/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Board from "./components/Board"



function App() {

  const [turn, setTurn] = useState(true);
  const [value, setValue] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const currentValue = value[currentMove]


  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    value(nextMove % 2 === 0)
  }
  function handlePlay(newValue) {
    const nextHistory = [...value.slice(0,currentMove+1), newValue]
    setValue(nextHistory)
    setCurrentMove(nextHistory.length -1) 
    setTurn(!turn)
  }

  const moves = value.map((values, move) => {
    let description = '';
    if(move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return ( 
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return <>
  <div className="game">
  <div className="game-board">
    <Board  turn={turn } values={currentValue} onPlay={handlePlay}/>
  </div>
  <div className="game-info">
      <ol>{moves}</ol>
  </div>
</div>
</>
}

export default App
