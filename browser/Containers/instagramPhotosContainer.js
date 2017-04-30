import {connect} from 'react-redux';
import InstagramPhotos from '../Components/instagramPhotos'
import {getRecipe} from '../action-creators/recipeActionCreators'

function mapStateToProps(state) {
  console.log(state, 'here is my state!!!!!!')
  return {
    allPhotos: state.allPhotos,
    allFoodPhotos: state.allFoodPhotos,
    recipes: state.recipes
  }
}

const mapDispatch = dispatch => ({
  getRecipe: (tags) => {
    console.log(tags, 'tags in container dispatcb')
    dispatch(getRecipe(tags));
  }
});

const InstaFoodContainer = connect(
  mapStateToProps,
  mapDispatch
)(InstagramPhotos);

export default InstaFoodContainer;
