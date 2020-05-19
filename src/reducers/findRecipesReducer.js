
export default (state = [], action)=>{
    switch(action.type){
        case 'SHOW_FIND_RECIPES':
            return action.fRecipes
        case 'SHOW_FIND_RECIPE':
            return action.fRecipe

        default:
            return state;
    }
} 