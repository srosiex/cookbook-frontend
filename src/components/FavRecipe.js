import React from 'react';
import {Link} from 'react-router-dom';


const FavRecipe = ({recipe}) => {
   return (<div>
     { recipe.favorite === true ? 
      <p> <img className="food_img" src={recipe.img} />
        <h3>{recipe.title}</h3>
        <b>Cuisine: {recipe.cuisine}</b><br />

        <Link key={recipe.id} to={`/myrecipes/${recipe.id}`}  >
          <button className="recipe-button">View Recipe</button>
        </Link>
        </p>
        :
        null
        }
    </div>)
}
export default FavRecipe