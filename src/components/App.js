import React from 'react'
import CountButton from './CountButton/CountButton'
import Spinner from './Spinner/Spinner'
import SeachBar from './SearchBar/SearchBar'


const App = () => {
    const myItem = 'jhay'

    return (
        <div>
            {/* <CountButton incrementBy={1} />
            <CountButton incrementBy={5} buttonColor={"blue"}/> */}

            <Spinner />
            <SeachBar />



        </div>
    )
}

export default App
