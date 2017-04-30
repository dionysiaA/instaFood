import {connect} from 'react-redux';
import InstagramPhotos from '../Components/instagramPhotos'
import {getRecipe} from '../action-creators/recipeActionCreators'

function mapStateToProps(state) {
  return {
    allPhotos: state.allPhotos,
    allFoodPhotos: state.allFoodPhotos
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
