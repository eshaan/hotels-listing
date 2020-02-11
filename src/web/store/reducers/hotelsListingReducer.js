import get from 'lodash.get';
import {
  GET_HOTEL_LISTING_IN_PROGRESS,
  SET_HOTEL_LISTING,
  GET_HOTEL_LISTING_SUCCESS
} from '../actionTypes';

const INITIAL_STATE = {
  hotelsList: [],
  isLoading: false
};

const hotelsListingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_HOTEL_LISTING:
      return {
        ...state,
        hotelsList: get(action, 'hotels', [])
      };

    case GET_HOTEL_LISTING_IN_PROGRESS:
      return {
        ...state,
        hotelsList: [],
        isLoading: true
      };

    case GET_HOTEL_LISTING_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};

export default hotelsListingReducer;
