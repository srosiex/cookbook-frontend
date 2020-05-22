import React from 'react'
import CommentsComponent from './CommentsComponent'

const CommentShow = ({comment, recipeId}) => {

    return(

        <div>
            {
             comment.recipe_id === recipeId ?
             
           " Comments:"+ comment.content
            :
            null
            }
        </div>
    )
}
export default CommentShow