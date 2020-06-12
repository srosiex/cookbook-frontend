import React from 'react'



class CommentShow extends React.Component {


    render(){
        const comment = this.props.comment
        const recipeId = this.props.recipeId
    return(

        <div className="comment-div">
            {
             comment.recipe_id === recipeId ?

                comment.content
            :
                null
            }
        </div>
    )}
}
export default CommentShow