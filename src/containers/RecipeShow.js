import React from 'react';
import {connect} from 'react-redux'
import {getRecipe} from '../actions/recipesActions'
import {removeRecipe} from '../actions/recipesActions'
import {fetchComments} from '../actions/recipesActions'
import CommentsComponent from '../components/CommentsComponent'
import CommentForm from '../components/CommentForm'


class RecipeShow extends React.Component{



    componentDidMount(){
        this.props.getRecipe(this.props.match.params.recipeId);
        this.props.fetchComments(this.props.match.params.recipeId)
    }


    handleBack = e => {
       this.props.history.push('/myrecipes')
    }

    handleDelete = e => {
        this.props.removeRecipe(this.props.recipe.id)
        this.props.history.push('/myrecipes')
    }

    render(){
        const recipe = this.props.recipe

        return(
          
            <div className="recipe">
                <h2 className="recipe-title-show">{recipe.title}</h2><br/>
                <img className="food_img_large" src={recipe.image} /><br/>
                <div className="recipe-item-bold">
                    <div className="show-cuisine">
                <b>Cuisine: </b>{recipe.cuisine}<br />
                </div>
                <div className="show-ingredients">
                <b>Ingredients:</b> {recipe.ingredients}<br/>
                </div>
               <b className="recipe-item-bold">Directions:</b> {recipe.directions}
               </div>
               <br/>
               <button onClick={this.handleDelete}>Delete</button><br/>
                    <CommentForm recipeId={this.props.match.params.recipeId} /> 
                    <CommentsComponent comments={this.props.comments} recipeId={this.props.match.params.recipeId} /><br/>
 
                    <button onClick={this.handleBack}>Back</button><br/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const recipe = state.recipes.find(r => r.id === parseInt(ownProps.match.params.recipeId, 10)) || {}
    return ({
        recipe: recipe,
        comments: state.comments
    })
}
export default connect(mapStateToProps, {getRecipe, removeRecipe, fetchComments})(RecipeShow)