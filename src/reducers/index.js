import { combineReducers } from 'redux'
import recipesReducer from '../reducers/recipesReducer'
import findRecipesReducer from '../reducers/findRecipesReducer'

export default combineReducers({
    recipes: recipesReducer,
    fRecipes: findRecipesReducer
})