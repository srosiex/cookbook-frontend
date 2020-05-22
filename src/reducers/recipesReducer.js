
export default (state = [], action)=>{
    switch(action.type){
        case 'SHOW_RECIPES':
            return action.recipes
        case 'SHOW_RECIPE':
            return action.recipe
        case 'ADD_RECIPE':
            return state.concat(action.recipe) 
        case 'REMOVE_RECIPE':
            return state.filter(recipe => recipe.id !== action.id)

        default:
            return state;
    }
} 