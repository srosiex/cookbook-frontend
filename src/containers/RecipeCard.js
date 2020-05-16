import React from 'react';
import {connect} from 'react-redux'
import {showRecipe} from '../actions/recipesActions'


class RecipeCard extends React.Component{

    componendDidMount(){
        const recipeId = this.props.recipe.id
        this.props.showRecipe(recipeId);
    }

    handleBack = e => {
       this.props.history.push('/myrecipes')
    }

    render(){
        const recipe = this.props.recipe
        return(
          
            <div>
                <h2>{recipe.title}</h2><br/>
                <img className="food_img" src={recipe.img} /><br/>
                <b>Cuisine: {recipe.cuisine}</b><br />
                <b>Ingredients:</b> {recipe.ingredients}<br/>
               <b>Directions:</b> {recipe.directions}

                <p><button onClick={this.handleBack}>Back</button></p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const recipe = state.recipes.find(r => r.id === parseInt(ownProps.match.params.recipeId, 10)) || {}

    return ({
        recipe: recipe
    })
}
export default connect(mapStateToProps, {showRecipe})(RecipeCard)