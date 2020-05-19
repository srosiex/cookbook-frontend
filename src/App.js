import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './containers/Recipes'
import RecipeCard from './containers/RecipeCard'
import FindRecipes from './containers/FindRecipes'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Home from './components/Home'
import Recipe from './components/Recipe';

import { connect } from 'react-redux'


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
         <Route exact path={`/myrecipes`}>
            <Recipes />
          </Route>
          <Route exact path="/myrecipes/:recipeId" component={RecipeCard} />
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
