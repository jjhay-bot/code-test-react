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

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <div className={'center'}>
            <div className={'search_field'}>
                <input type="text" value={capitalize(searchValue)} onChange={handleInputChange} placeholder="search..." />
                {displayClear && <button onClick={handleClearClick}>clear</button>}  
            </div>
                     

            <ul className={'center'}>
                {filteredProducts.map((product) => {
                    return (
                        <div className={'card'}>
                            <li  key={product}>{product}</li>
                        </div>
                    )
                })}
            </ul>
            
        </div>
    )
   
}

export default SearchBar