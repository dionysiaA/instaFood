import {connect} from 'react-redux';
import InstagramPhotos from '../Components/instagramPhotos'

function mapStateToProps(state) {
  return {
    allPhotos: state.allPhotos,
    allFoodPhotos: state.allFoodPhotos
  }
}

// const mapDispatch = dispatch => ({
//   keyAction: (dataPassingDown) => {
//     dispatch(keyAction(dataPassingDown));
//   }
// });

const InstaFoodContainer = connect(
  mapStateToProps
)(InstagramPhotos);

export default InstaFoodContainer;
