import React, { useState } from 'react'
import "./SearchBar.css"

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")            // default, updated

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const displayClear = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div>
            <i>{searchValue}</i>
            <br />
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {displayClear && <button onClick={handleClearClick}>clear</button>}                       

            <ul>
                {filteredProducts.map((product) => {
                    return <li  key={product}>{product}</li>
                })}
            </ul>
            
        </div>
    )
   
}

export default SearchBar