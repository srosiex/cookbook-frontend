
export default (state = [], action)=>{
    switch(action.type){
        case 'SHOW_RECIPES':
            return action.recipes
        case 'SHOW_RECIPE':
            return action.recipe
        case 'ADD_RECIPE':
            return [...state, action.recipe] 

        default:
            return state;
    }
} 