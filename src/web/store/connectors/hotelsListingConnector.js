import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';
import { getHotelsListing } from '../actions/hotelsListingActions';

const mapStateToProps = state => {
  const hotelsList = get(state, 'hotelsListingData.hotelsList', []);

  return {
    hotelsList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getHotelsListing
    },
    dispatch
  );
};

export const hotelsListingConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

