import React from 'react'
import CommentsComponent from './CommentsComponent'
import { connect } from 'react-redux'


class CommentShow extends React.Component {


    render(){
        const comment = this.props.comment
        const recipeId = this.props.recipeId
    return(

        <div>
            {
             comment.recipe_id === recipeId ?
             
                comment.content
            :
                null
            }
        </div>
    )}
}
export default connect(null, {})(CommentShow)