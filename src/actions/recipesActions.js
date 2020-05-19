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

export const getRecipe = (recipeId) => {
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

export const addRecipe = recipe => {
    return{
        type: 'ADD_RECIPE',
        recipe
    }
}

export const createRecipe = recipe => {
    return dispatch => {
        fetch('http://localhost:3001/recipes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({recipe: recipe})
        })
        .then(res => res.json())
        .then(recipe => {
            dispatch(addRecipe(recipe))
        })
        .catch(error => console.log(error))
    }
}

export const removeRecipe = (recipeId, routerHistory) => {
    return dispatch => {
        return fetch(`http://localhost:3001/recipes/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(recipe => {
            dispatch({type: "REMOVE_RECIPE", payload: recipe})
            routerHistory.replace('/myrecipes')
        })
        .catch(error => console.log(error))
    }
}



///////////////////

export const showFindRecipes = fRecipes => {
    return {
        type: "SHOW_FIND_RECIPES",
        fRecipes: fRecipes
    }
}

export const getFindRecipes = (searchQuery = 'vegan') => {
    console.log(searchQuery)
    return dispatch => {
        fetch(`https://yummly2.p.rapidapi.com/feeds/search?allowedAttribute=${searchQuery}&start=0&maxResult=10`, {
            headers:{
                "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
                "X-RapidAPI-Key": "fbead69ac3msh33016cbc11577d5p1d87cfjsn8fcc1a0c0df8"
            }
            })
        .then(res => res.json())
        .then(data => {
        dispatch(showFindRecipes(data.feed))
    })
    }
}