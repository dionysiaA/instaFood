// import axios from 'axios';
//
// export const RECEIVE_ALL_PUPPIES = 'RECEIVE_ALL_PUPPIES';
// export const RECEIVE_SINGLE_PUPPY = 'RECEIVE_SINGLE_PUPPY';
// export const RECEIVE_SINGLE_PUPPY_LIKES = 'RECEIVE_SINGLE_PUPPY_LIKES';
// export const INCREASE_SINGLE_PUPPY_LIKES = 'INCREASE_SINGLE_PUPPY_LIKES';
//
// //action creators
// const receive_puppies = (allPuppies) => ({ type: RECEIVE_ALL_PUPPIES,  allPuppies});
// const receive_single_puppy = (singlePuppy) => ({ type: RECEIVE_SINGLE_PUPPY,  singlePuppy});
// const receive_single_puppy_likes = (singlePuppyLikes) => ({ type: RECEIVE_SINGLE_PUPPY_LIKES,  singlePuppyLikes });
// const increase_single_puppy_likes = (increaseLikes) => ({ type: INCREASE_SINGLE_PUPPY_LIKES,  increaseLikes });
//
//
// //action - thunks for creating dispatch
// // callbacks for retrieving the data from the database
// export function getAllPuppies(){
//   return  (dispatch) => {
//     axios.get('/api/puppies')
//       .then( puppies => {
//         dispatch(receive_puppies(puppies.data))
//       })
//       .catch( err => console.err(err) )
//   }
// }
//
// export function getPuppy(id){
//   return  (dispatch) => {
//     axios.get(`/api/puppies/${id}`)
//       .then( puppy => {
//         dispatch(receive_single_puppy_likes(puppy.data.likes))
//         dispatch(receive_single_puppy(puppy.data))
//       })
//       .catch( err => console.err(err) )
//   }
// }
//
// export function getPuppyLikes(id){
//   return  (dispatch) => {
//     axios.get(`/api/puppies/${id}/likes`)
//       .then( puppy => {
//         dispatch(receive_single_puppy_likes(puppy.data.likes))
//       })
//       .catch( err => console.err(err) )
//   }
// }
//
// export function increasePuppyLikes(id, likes){
//   return  (dispatch) => {
//     axios.put(`/api/puppies/${id}/likes`, { likes } )
//       .then( puppy => {
//         dispatch(increase_single_puppy_likes(puppy.data.likes))
//       })
//       .catch( err => console.err(err) )
//   }
// }