export const showRecipes = recipes => {
    return {
        type: "SHOW_RECIPES",
        recipes
    }
}

export const getRecipes = () => {
    return dispatch => {
        fetch('http://localhost:3001/recipes')
        .then(r => r.json())
        .then(recipesJSON =>{
            dispatch(showRecipes(recipesJSON))
        })
    }
}

export const showRecipe = recipe => {
    return {
        type: "SHOW_RECIPE",
        recipe
    }
}

export const getRecipe = recipeId => {
    return dispatch => {
        fetch(`http://localhost:3001/recipes/${recipeId}`)
        .then(r => r.json())
        .then(recipeJSON =>{
            dispatch(showRecipe([recipeJSON]))
        }) 
        .catch(e => console.log(e))
    }
}
//thunk returns function-dispatch
