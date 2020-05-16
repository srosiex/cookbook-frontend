import React from 'react'
import {addRecipe} from '../actions/recipesActions'
import {connect} from 'react-redux'

class Form extends React.Component{

    constructor(){
        super()

        this.state = {
            title: '',
            ingredients: '',
            cuisine: '',
            directions: '',
            img: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addRecipe(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Create new recipe: <br/>
                <input type="text" name="img" value={this.state.img} placeholder="image url" onChange={this.handleChange} /><br/>
                <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} /><br/>
                <input type="text" name="cuisine" value={this.state.cuisine} placeholder="cuisine" onChange={this.handleChange} /><br/>
                <input type="textarea" name="ingredients" value={this.state.ingredients} placeholder="ingredients" onChange={this.handleChange} /><br/>
                <input type="textarea" name="directions" value={this.state.directions} placeholder="directions" onChange={this.handleChange} /><br/>
                    <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, {addRecipe})(Form)