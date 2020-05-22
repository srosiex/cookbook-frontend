import React from 'react';
import './App.css';
import FindRecipes from './containers/FindRecipes'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Home from './components/Home'

import { connect } from 'react-redux'
import RecipesPage from './containers/RecipesPage';
import RecipeShow from './containers/RecipeShow'


class App extends React.Component {


  render(){
  return (
    <Router>
      <div className="App">
        <Link to={`/`}>Home</Link><br />
        <Link to={`/myrecipes`}>My Recipes</Link>
        <Link to={`/findrecipes`}>Find Recipes</Link>
        <hr/>

        <Switch>
          <Route exact path="/" component={Home} />
         <Route exact path={`/myrecipes`} component={RecipesPage}/>
          <Route path="/myrecipes/:recipeId" component={RecipeShow} />
          <Route exact path="/findrecipes" component={FindRecipes} />
        </Switch>

    </div>
    </Router>

  );}
}

const mapStateToProps = state => {
  return{
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(App);
