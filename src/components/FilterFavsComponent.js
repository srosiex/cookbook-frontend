import React from 'react'

const FilterFavsComponent = (props) => {
    return(
        <div className="filter-favs">
            Filter: 
            <label>All </label><input type="radio" name="filterFavs" id="all" value="All"  onchange={props.handleFilter} />
            <label>Favorites</label><input type="radio" name="filterFavs" id="favorite" value="true" onChange={props.handleFilter} />
        </div>
    )
}
export default FilterFavsComponent