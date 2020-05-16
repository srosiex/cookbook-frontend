import React from 'react';
import {Link} from 'react-router-dom';


const Recipe = ({recipe}) => {
   return (<div>
     
      <p> <img className="food_img" src={recipe.image} />
        <h3>{recipe.title}</h3>
        <b>Cuisine: {recipe.cuisine}</b><br />

        <Link key={recipe.id} to={`/myrecipes/${recipe.id}`}  >
          <button className="recipe-button">View Recipe</button>
        </Link>
        </p>
        
    </div>)
}
export default Recipe