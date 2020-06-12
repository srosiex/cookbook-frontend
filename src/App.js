import React from 'react';
import './App.css';
import FindRecipes from './containers/FindRecipes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'

import RecipesPage from './containers/RecipesPage';
import RecipeShow from './containers/RecipeShow'
import Navbar from './components/Navbar'

class App extends React.Component {


  render(){

  return (
    <Router>
      <div className="App">

        <Navbar />

        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/myrecipes" component={RecipesPage}/>
         <Route path="/myrecipes/:recipeId" component={RecipeShow} />
         <Route exact path="/findrecipes" component={FindRecipes} />
        </Switch>

    </div>
    </Router>

  );}
}

export default App;
