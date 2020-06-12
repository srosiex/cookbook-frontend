export const showRecipes = recipes => {
    return {
        type: "SHOW_RECIPES",
        recipes
    }
}

export const getRecipes = () => {
    return dispatch => {
        console.log('a')
        fetch('https://cookbook-rails-backend.herokuapp.com/recipes')
        .then(r => r.json())
        .then(recipesJSON =>{
            console.log('b')
            dispatch(showRecipes(recipesJSON))
        })
        console.log('c')
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
        fetch(`https://cookbook-rails-backend.herokuapp.com/recipes/${recipeId}`)
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
        fetch('https://cookbook-rails-backend.herokuapp.com/recipes', {
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
        return fetch(`https://cookbook-rails-backend.herokuapp.com/recipes/${recipeId}`, {
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

/////////////////// comments /////////////

export const showComments = comments => {
    return {
        type: "FETCH_COMMENTS",
        comments
    }
}

export const fetchComments = (recipeId) => {
    return dispatch => {
       return fetch(`https://cookbook-rails-backend.herokuapp.com/recipes/${recipeId}/comments`)
        .then(res => res.json())
        .then(comments => dispatch(showComments(comments))
            )
            .catch(error => console.log(error))
    }
}

export const addComment = comment => {
    return{
        type: 'ADD_COMMENT',
        comment
    }
}

export const createComment = (comment) => {
    return dispatch => {
        fetch(`https://cookbook-rails-backend.herokuapp.com/recipes/${comment.recipe_id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: comment})
        })
        .then(res => res.json())
        .then(comment => {
            dispatch(addComment(comment))
        })
        .catch(error => console.log(error))
    }
}

// export const deleteComment = (commentId, recipeId) => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/recipes/${recipeId}/comments/${commentId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//               }
//         })
//         .then(res => res.json())
//         .then(comment => {
//             dispatch({type: "DELETE_COMMENT", payload: comment})
//         })
//     }
// }


/////////////////// yummly api ///////////

export const showFindRecipes = fRecipes => {
    return {
        type: "SHOW_FIND_RECIPES",
        fRecipes: fRecipes
    }
}

export const getFindRecipes = (searchQuery = 'vegan') => {
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