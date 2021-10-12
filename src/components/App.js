import React from 'react'
import CountButton from './CountButton/CountButton'


const App = () => {
    const myItem = 'jhay'

    return (
        <div>
            <CountButton incrementBy={1} />
            <CountButton incrementBy={5} buttonColor={"blue"}/>

        </div>
    )
}

export default App
