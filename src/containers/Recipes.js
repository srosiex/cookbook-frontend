import React from 'react'
import Recipe from '../components/Recipe'
import Form from '../components/Form'
import FilterFavsComponent from '../components/FilterFavsComponent'

class Recipes extends React.Component {

    constructor(props){
      super(props)

      this.state={
        filterFavs: 'All'
      }
    }
    

    recipeComponent = (recipes) => recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)

    recipeFilter = () => {
      let filteredList = ""
      if (this.state.filterFavs === 'All'){
        filteredList = this.props.recipes
      }
      else if(this.state.filterFavs === 'true'){
        filteredList = this.props.recipes.filter(recipe => recipe.favorite === true)
      }
      return filteredList
    }

    handleFilter = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
       

    render(){
      // const recipeComponent = this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
        return(
            <div className="recipes-list-page">
              <div className="new-form-s">
              <Form />
              </div>
              <div className="filter">
              <FilterFavsComponent handleFilter={this.handleFilter} /><br/>
              </div>
              <div className="recipe-div">
                {this.recipeComponent(this.recipeFilter())}
               </div>
            </div>
        )}
    }

export default Recipes