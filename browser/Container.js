import {connect} from 'react-redux';
//import action creator for keyAction


function mapStateToProps(state) {
  return {
    key: state.key
  }
}

const mapDispatch = dispatch => ({
  keyAction: (dataPassingDown) => {
    dispatch(keyAction(dataPassingDown));
  }
});

const Container = connect(
  mapStateToProps,

)(Component);

export default Container;