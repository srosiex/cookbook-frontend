import React from 'react'
import FindRecipesComponent from '../components/FindRecipesComponent'
import {connect} from 'react-redux'
import {getFindRecipes} from '../actions/recipesActions'
import SearchBox from '../components/SearchComponent'

class FindRecipes extends React.Component{

    state = {
        searchQuery: ''
    }

    componentDidMount(){
        const searchQuery = this.state.searchQuery
        this.props.getFindRecipes()
    }


    handleSearch = e => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            searchQuery: ''
        })
    }

    render(){

        const recipeDisplay = this.props.recipes.map(recipe=> recipe.display)

        const recipe = recipeDisplay.map(recipe => <FindRecipesComponent key={recipe.id} recipe={recipe} />)

        return(
            <div>
                Search Recipes
                <SearchBox handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} />
               <div className="find-rec"> {recipe}</div> 
            </div>
        )
    }
}

const mapStateToProps = state => {
   return{
       recipes: state.fRecipes
   } 
}

export default connect(mapStateToProps, {getFindRecipes})(FindRecipes)