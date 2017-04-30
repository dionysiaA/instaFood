import {
  RECEIVE_RECIPE,
} from '../action-creators/recipeActionCreators'

const recipesReducer = function(state = [], action) {
  switch(action.type){
    case RECEIVE_RECIPE:
      return action.recipes;
    default:
      return state;
  }
};

export default recipesReducer;
