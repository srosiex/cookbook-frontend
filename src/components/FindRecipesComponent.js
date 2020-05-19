import React from 'react'

const FindRecipesComponent = ({recipe}) => {
    return(
        <div>
            <img className="food_img" src={recipe.images[0]} /><br />
            {recipe.displayName} <br />
            Link: <a href={recipe.source.sourceRecipeUrl}>Name</a>
        </div>
    ) 
}
export default FindRecipesComponent