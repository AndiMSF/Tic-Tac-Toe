/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import Square from './Square'

function winner(values){
    const rules = [
      // Horizontal
      [0,1,2],
      [3,4,5],
      [6,7,8],
  
      // Vertikal
      [0,3,6],
      [1,4,7],
      [2,5,8],
  
      // Diagonal
      [0,4,8],
      [2,4,6]
    ]
  
      for (let i = 0; i < rules.length; i++){
        const a = rules[i][0]
        const b = rules[i][1]
        const c = rules[i][2]
  
        if(values[a] && values[a] === values[b] && values[a] === values[c]) {
          return values[a]
        }
        
      }
      return false 
  } 
  
function Board({turn, values, onPlay}){


  function handleClick(i){
    

    if (values[i] || winner(values )) {
      return;
    }

    const newValue = values.slice()
    if(turn){
      newValue[i] = 'X'
    } else {
      newValue[i] = 'O'
    }
     onPlay(newValue)
  }

  const win = winner(values)
  let status = ''
  if(win) {
    status = "Winner : "+win;
  } else {
    status = "Player Turn : "+ (turn ? "X" : "O")
  }
  console.log(win);

  return ( 
  <>
    <div className="status">{status}</div>
    <div className="container">
    <Square item={values[0]} addClick={()=>handleClick(0)}/>
    <Square item={values[1]} addClick={()=>handleClick(1)}/>
    <Square item={values[2]} addClick={()=>handleClick(2)}/>
    <Square item={values[3]} addClick={()=>handleClick(3)}/>
    <Square item={values[4]} addClick={()=>handleClick(4)}/>
    <Square item={values[5]} addClick={()=>handleClick(5)}/>
    <Square item={values[6]} addClick={()=>handleClick(6)}/>
    <Square item={values[7]} addClick={()=>handleClick(7)}/>
    <Square item={values[8]} addClick={()=>handleClick(8)}/>
    </div>
  </>  
  )
}

export default Board