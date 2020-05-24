import React from 'react';
import CommentShow from './CommentShow'


const CommentsComponent = ({comments, recipeId}) => {

    const renderComments = comments.map(comment => <CommentShow key={comment.id} comment={comment} recipeId={recipeId} />)
    return(
        <div>
            {renderComments}
        </div>
    )
}

export default CommentsComponent