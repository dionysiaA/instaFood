import {
  RECEIVE_RECIPE,
} from '../action-creators/recipeActionCreators'

const recipesReducer = function(state = {}, action) {
  const newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_RECIPE:
      newState.recipe = action.recipe;
      break;
    default:
      return state;
  }
  return newState;
};

export default recipesReducer;
