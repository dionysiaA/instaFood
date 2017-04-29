/* Dependencies */
const {combineReducers} = require('redux');

/* Import Other Reducers */
import rootReducer from './instagramReducers';

/* Combine & Export Reducers to Store */
const mainReducer = combineReducers({
  rootReducer
});

module.exports = mainReducer;
