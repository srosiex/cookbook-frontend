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
        this.props.getFindRecipes({searchQuery})
    }


    handleSearch = e => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    render(){


        const recipeDisplay = this.props.recipes.map(recipe=> recipe.display)

        const recipe = recipeDisplay.map(recipe => <FindRecipesComponent key={recipe.id} recipe={recipe} />)
        
        // const recipe = recipeDisplay.map(recipe => {
        //    return recipe.displayName
        // })
        // const filteredRecipes = recipe.filter(recipe => {
        //     return recipe.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        // })

        return(
            <div>
                Search Recipes
                <SearchBox handleSearch={this.handleSearch} />
                {recipe}
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