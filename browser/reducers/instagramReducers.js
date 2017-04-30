import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_FOOD_PHOTOS
} from '../action-creators/istagramActionCreators'

import { combineReducers } from 'redux';

export const allPhotosReducer = function(state = [], action) {
 switch(action.type){
    case RECEIVE_ALL_PHOTOS:
      return action.allPhotos;
    default:
      return state;
  }
};

export const allFoodPhotos = function(state = [], action) {
  switch(action.type){
    case RECEIVE_FOOD_PHOTOS:
      return action.foodPhotos;
    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   allPhotos: allPhotosReducer,
//   allFoodPhotos: allFoodPhotos
// });
//
// export default rootReducer;
