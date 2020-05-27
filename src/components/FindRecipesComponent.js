import React from 'react'

const FindRecipesComponent = ({recipe}) => {
    return(
        <div className="f-recipe-card">
           <center> <img alt="img" className="food_img" src={recipe.images[0]} /></center> <br />
            {recipe.displayName} <br />
            <a href={recipe.source.sourceRecipeUrl}>Directions</a>
        </div>
    ) 
}
export default FindRecipesComponent