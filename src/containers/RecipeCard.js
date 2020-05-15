import React from 'react';
import {connect} from 'react-redux'
import {showRecipe} from '../actions/recipesActions'
import { render } from '@testing-library/react';

class RecipeCard extends React.Component{

    componendDidMount(){
        this.props.showRecipe();
    }

    render(){
        return(
            <div>Hello</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe
    }
}
export default connect(mapStateToProps, {showRecipe})(RecipeCard)