import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './containers/Recipes'
import RecipeCard from './containers/RecipeCard'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'


class App extends React.Component {


  render(){
  return (
    <Router>
      <div className="App">
        <Link to={`/`}>Home</Link><br />
        <Link to={`/myrecipes`}>My Recipes</Link>
        <hr/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={`/myrecipes`}>
            <Recipes />
          </Route>
          <Route exact path="/myrecipes/:id" component={RecipeCard} />
        </Switch>

    </div>
    </Router>

  );}
}
export default App;
