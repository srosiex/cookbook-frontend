import React from 'react';

import {
    BrowserRouter as Router,
    NavLink
} from 'react-router-dom'


class Navbar extends React.Component{
    render(){
        return(
           <div className="navbar">
              <div className="logo">mycookbook</div> 
              <div className="nav-links">
                <ul>
                <li id="nav-item"><NavLink to={`/`}>Home</NavLink><br /></li>
                <li id="nav-item"><NavLink to={`/myrecipes`}>My Recipes</NavLink></li>
                <li id="nav-item"><NavLink to={`/findrecipes`}>Find Recipes</NavLink></li>
                </ul>
              </div>
          </div>
        )
    }
}
export default Navbar