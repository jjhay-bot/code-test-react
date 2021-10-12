import React from 'react'
import CountButton from './CountButton/CountButton'
import Spinner from './Spinner/Spinner'
import SeachBar from './SearchBar/SearchBar'
import TestUse from './TestUse/TestUse'

const App = () => {
    const myItem = 'jhay'

    return (
        <div>
            {/* <CountButton incrementBy={1} />
            <CountButton incrementBy={5} buttonColor={"blue"}/> */}

            {/* <Spinner /> */}

            {/* <SeachBar products={[ 
                'product 1',
                'pro2duct 2',
                'prod3uct 3',
                'produ4ct 4',
                ]} 
            /> */}

            <TestUse incrementBy={1} />
    

        </div>
    )
}

export default App
