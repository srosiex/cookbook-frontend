import React from 'react'
import {createRecipe} from '../actions/recipesActions'
import {connect} from 'react-redux'

class Form extends React.Component{

    constructor(){
        super()

        this.state = {
            title: '',
            ingredients: '',
            cuisine: '',
            directions: '',
            favorite: false,
            image: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createRecipe(this.state)
      
    }

    handleChecked = e => {
        this.setState({
            favorite: true
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Create new recipe: <br/>
                <input type="text" name="image" value={this.state.image} placeholder="image url" onChange={this.handleChange} /><br/>
                Favorite<input type="checkbox" name="favorite" value={this.state.favorite} onChange={this.handleChecked} /><br/>
                <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} /><br/>
                <input type="text" name="cuisine" value={this.state.cuisine} placeholder="cuisine" onChange={this.handleChange} /><br/>
                <input type="textarea" name="ingredients" value={this.state.ingredients} placeholder="ingredients" onChange={this.handleChange} /><br/>
                <input type="textarea" name="directions" value={this.state.directions} placeholder="directions" onChange={this.handleChange} /><br/>
                    <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, {createRecipe})(Form)