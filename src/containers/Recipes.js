import React from 'react'
import Recipe from '../components/Recipe'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipesActions'
import Form from '../components/Form'

class Recipes extends React.Component {
    
    componentDidMount(){
        this.props.getRecipes()
    }
       

    render(){

        const recipeComponent = this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
       
        return(
            <div>
              <Form />
         {recipeComponent}
            </div>
        )}
    }

    const mapStateToProps = state => {
        return{
          recipes: state.recipes
        }
      }

     const mapDispatchToProps = dispatch => {
        return{
          getRecipes: () => dispatch(getRecipes())
        }
      }
export default connect(mapStateToProps, mapDispatchToProps)(Recipes)