import React, { useState } from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")            // default, updated

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const displayClear = searchValue.length > 0

    return (
        <div>
            <i>{searchValue}</i>
            <br />
            <input id="coun" type="text" value={searchValue} onChange={handleInputChange} />
            {displayClear && <button onClick={handleClearClick}>clear</button>}
            

        </div>
    )
   
}

export default SearchBar