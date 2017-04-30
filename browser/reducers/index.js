/* Dependencies */
const {combineReducers} = require('redux');

/* Import Other Reducers */
import {allPhotosReducer, allFoodPhotos} from './instagramReducers';
import recipesReducer from './recipeReducer';

/* Combine & Export Reducers to Store */
const mainReducer = combineReducers({
  allPhotos: allPhotosReducer,
  allFoodPhotos,
  recipes: recipesReducer
});

module.exports = mainReducer;
