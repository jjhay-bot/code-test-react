import React, { useState } from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState(" ")            // default, updated

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {searchValue}
        </div>
    )
   
}

export default SearchBar