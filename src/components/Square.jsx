/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react"

function Square ({item, addClick}) {
    // eslint-disable-next-line react/prop-types
    return <button onClick={addClick} className="square">{item}</button>
}

export default Square