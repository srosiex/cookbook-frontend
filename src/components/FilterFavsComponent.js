import React from 'react'

const FilterFavsComponent = (props) => {
    return(
        <div className="filter-favs">
            <span id="filter-id">Filter:  </span>
            <label>All </label><input type="radio" name="filterFavs" id="all" value="All"  onChange={props.handleFilter} />
            <label>Favorites</label><input type="radio" name="filterFavs" id="true" value='true' onChange={props.handleFilter} />
        </div>
    )
}
export default FilterFavsComponent