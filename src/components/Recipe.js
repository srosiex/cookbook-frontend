import React from 'react';
import {Link} from 'react-router-dom';


const Recipe = ({recipe}) => {
    
   return (
      <div className="recipe-card">
     
      <center><img alt="food_img" className="food_img" src={recipe.image} /></center>
        <h3>{recipe.title}</h3>
        
        <b className="c-recipe">Cuisine:</b> {recipe.cuisine}<br />
    
        <Link key={recipe.id} to={`/myrecipes/${recipe.id}`}  >
          <button className="recipe-button">View Recipe</button>
        </Link>
        
        
      </div>
    )
    }

export default Recipe