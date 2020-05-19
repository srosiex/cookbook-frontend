import React from 'react'


function SearchBox(props){
    return(
        <div>
            <input onChange={props.handleSearch} type="text" name="searchQuery" />
        </div>
    )
}

export default SearchBox