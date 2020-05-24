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
        const {recipes, match} = this.props
        return(
            <div>
                <Switch>
                    <Route exact path={match.url} render={()=>(
                        <Recipes recipes={recipes} />
                    )} />
                    <Route path={`${match.url}/:recipeId`} component={<RecipeShow recipes={recipes}/>} />
                </Switch>
            </div>
        )
    }
}

export default connect(state => ({recipes: state.recipes}), {getRecipes})(RecipesPage)