import {
  GET_HOTEL_LISTING_IN_PROGRESS,
  SET_HOTEL_LISTING,
  GET_HOTEL_LISTING_SUCCESS
} from '../actionTypes';
import get from 'lodash.get';
import data from '../data.json';
import { transformHotelListingData, sortHotelListingsByPrice } from '../transforms/hotelListingTransform';

const fetchHotels = () => {
  return get(data, 'results', []);
};

const setHotelsListing = hotels => {
  return {
    type: SET_HOTEL_LISTING,
    hotels
  };
};

const getHotelsListingInProgress = () => {
  return {
    type: GET_HOTEL_LISTING_IN_PROGRESS
  };
};

const getHotelsListingSuccess = () => {
  return {
    type: GET_HOTEL_LISTING_SUCCESS
  };
};

// Can add a failed action here too, in case of an async call
export const getHotelsListing = (priceSortOrder = 'asc') => {
  return dispatch => {
    dispatch(getHotelsListingInProgress());
    const hotelsListingData = fetchHotels();
    const transformedHotelsListData = transformHotelListingData({ hotelsList: hotelsListingData });
    const sortedHotelsListData = sortHotelListingsByPrice({ transformedHotelsListData, priceSortOrder });
    dispatch(getHotelsListingSuccess());
    return dispatch(setHotelsListing(sortedHotelsListData));
  };
};
