import axios from 'axios';

export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';

//action creators
const receiveRecipe = (recipes) => ({ type: RECEIVE_RECIPE,  recipes});

export function getRecipe(tags){
  return  (dispatch) => {
    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random', {
      params: {
        tags: tags,
        limitLicense: false,
        number: 3
      },
      headers: {'X-Mashape-Key':'Cl8mkj5Tr7msh1zjmFrgaNhIXvk4p1oikEzjsniMhEGk70UZo5',
        'Accept':'application/json'
      }
    })
      .then(recipe => {
        console.log(recipe, tags, 'recipe found!!!!')
        dispatch(receiveRecipe(recipe.data.recipes))
      })
      .catch( err => console.err(err) )
  }
}
