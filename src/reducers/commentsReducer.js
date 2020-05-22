export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_COMMENTS':
            return action.comments

        default: 
            return state;
    }
}