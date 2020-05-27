import React from 'react';
import { connect } from 'react-redux'
import {createComment} from '../actions/recipesActions'

class CommentForm extends React.Component{

   constructor(props){
       super(props)

       this.state = {
           content: '',
           recipe_id: this.props.recipeId
       }
   }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.createComment(this.state)

        this.setState({
            content: ''
        })
    }


    render(){
        return(
            <div className="comment-form-container">
                <span className="add-comment">Add a comment:</span>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="textarea" name="content" value={this.state.content} placeholder="Type comment" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createComment})(CommentForm)