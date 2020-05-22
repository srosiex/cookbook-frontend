import { combineReducers } from 'redux'
import recipesReducer from '../reducers/recipesReducer'
import findRecipesReducer from '../reducers/findRecipesReducer'
import commentsReducer from '../reducers/commentsReducer'

export default combineReducers({
    recipes: recipesReducer,
    fRecipes: findRecipesReducer,
    comments: commentsReducer
})