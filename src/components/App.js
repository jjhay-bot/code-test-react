import React, { useState , useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import Spinner from './Spinner/Spinner'
import SeachBar from './SearchBar/SearchBar'
import TestUse from './TestUse/TestUse'

const App = () => {
    const [productsState, setProductsState] = useState([])

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches')
            .then((res)=>res.json())
            .then((json) => {
                console.log(json)
            })

        setTimeout(() => {
            setProductsState([ 
                'phone',
                'payphone',
                'telephone',
                'cellphone',
            ])
        }, 2000)
    }, [])

    const hasProducts = productsState.length > 0

    return (
        <div>
            {/* <CountButton incrementBy={1} />
            <CountButton incrementBy={5} buttonColor={"blue"}/> */}

            {/* <TestUse incrementBy={1} /> */}

            {hasProducts ? <SeachBar products={productsState} /> : <Spinner /> }


        </div>
    )
}

export default App
