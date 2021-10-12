import React, { useState , useEffect } from 'react'
import "./CountButton.css"

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)         //userState(defaultvalue)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy) 
    }

    return (
        <div>
            <button onClick={handleClick}> +{props.incrementBy} </button>
            <div className={"count-display"} >{currentCount}</div>
        </div>
    )
}

export default CountButton