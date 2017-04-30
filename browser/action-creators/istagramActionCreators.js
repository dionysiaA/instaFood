import axios from 'axios';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_FOOD_PHOTOS = 'RECEIVE_FOOD_PHOTOS';


//action creators
const receiveAllPhotos = (allPhotos) => ({ type: RECEIVE_ALL_PHOTOS,  allPhotos});
const receiveFoodPhotos = (foodPhotos) => ({ type: RECEIVE_FOOD_PHOTOS,  foodPhotos });

//action - thunks for creating dispatch
// callbacks for retrieving the data from the database
export function getAllPhotos(){
  return  (dispatch) => {
    console.log('trying to dsiaptchioho getallPhotos')
    axios.get('/api/instagram/media')
      .then( media => {
        console.log(media, 'here are the media retrieved from the server')
        dispatch(receiveAllPhotos(media))
      })
      .catch( err => console.err(err) )
  }
}

export function getFoodPhotos(){
  return  (dispatch) => {
    console.log('trying to foodTages getallPhotos')
    axios.get(`/api/instagram/media/foodTags`)
      .then(media => {
        console.log(media, 'here are the foody retrieved from the server')
        dispatch(receiveFoodPhotos(media))
      })
      .catch( err => console.err(err) )
  }
}
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
