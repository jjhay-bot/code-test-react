import React, { useState , useEffect } from 'react'
import "./TestUse.css"

const TestUse = (props) => {
    const [currentCount, setCurrentCount] = useState(0)         //userState(defaultvalue)

    
    useEffect(() => {      
        console.log(currentCount);                             // useEffect(() => {}, [])
        if (currentCount === 10) {
            // somelogic here ....
            alert('ops 10')
            setCurrentCount(0)
        }
    }, [currentCount])                                         // can add multiple states, if [] has no value execute once
   

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

export default TestUse