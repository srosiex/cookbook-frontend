import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import {getRecipes} from '../actions/recipesActions'
import Recipes from './Recipes'
import RecipeShow from './RecipeShow'


class RecipesPage extends React.Component{

    componentDidMount(){
        this.props.getRecipes()
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path={this.props.match.url} render={()=>(
                        <Recipes recipes={this.props.recipes} />
                    )} />
                    <Route path={`${this.props.match.url}/:recipeId`} component={<RecipeShow recipes={this.props.recipes}/>} />
                </Switch>
            </div>
        )
    }
}

export default connect(state => ({recipes: state.recipes}), {getRecipes})(RecipesPage)