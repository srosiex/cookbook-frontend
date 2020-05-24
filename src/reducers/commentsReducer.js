export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_COMMENTS':
            return action.comments
        case 'ADD_COMMENT':
            return state.concat(action.comment)
        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.id)

        default: 
            return state;
    }
}