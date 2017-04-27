// import {
//
// } from './action-creators'
//
// import { combineReducers } from 'redux';
//
// const allPuppiesReducer = function(state = [], action) {
//  switch(action.type){
//     case RECEIVE_ALL_PUPPIES:
//       return action.allPuppies;
//     default:
//       return state;
//   }
// };
//
// const initial_state = {
//   puppy: {},
//   likes: 0
// }
//
// const singlePuppyReducer = function(state = initial_state, action) {
//   const newState = Object.assign({}, state);
//   switch(action.type){
//     case RECEIVE_SINGLE_PUPPY:
//       newState.puppy = action.singlePuppy;
//       break;
//     case RECEIVE_SINGLE_PUPPY_LIKES:
//       newState.likes = action.singlePuppyLikes;
//       break;
//     case INCREASE_SINGLE_PUPPY_LIKES:
//       newState.likes = action.increaseLikes;
//       break;
//     default:
//       return state;
//   }
//   return newState;
// };
//
// const rootReducer = combineReducers({
//   allPuppies: allPuppiesReducer,
//   singlePuppy: singlePuppyReducer
// });
//
// export default rootReducer;
