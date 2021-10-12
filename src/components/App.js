import React, { useState , useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import Spinner from './Spinner/Spinner'
import SeachBar from './SearchBar/SearchBar'
import TestUse from './TestUse/TestUse'

const App = () => {
    const [productsState, setProductsState] = useState([])

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches')
            .then((res) => res.json())
            .then((producstsArray) => {                       // mission_name, upcoming, launch_success, launch_year, article_link, video_link
                const newProductsState = producstsArray.map((product) => {
                    return product.mission_name                             
                })
                setProductsState(newProductsState)
            })
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
