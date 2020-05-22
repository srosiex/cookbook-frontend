import React from 'react';
import {Link} from 'react-router-dom';


class Recipe extends React.Component {
  render(){
    
   return (
      <div className="recipe-card">
     
      <img className="food_img" src={this.props.recipe.image} />
        <h3>{this.props.recipe.title}</h3>
        <b>Cuisine: {this.props.recipe.cuisine}</b><br />

        <Link key={this.props.recipe.id} to={`/myrecipes/${this.props.recipe.id}`}  >
          <button className="recipe-button">View Recipe</button>
        </Link>
        
        
      </div>
    )
    }
}
export default Recipe