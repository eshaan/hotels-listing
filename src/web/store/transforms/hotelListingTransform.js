import get from 'lodash.get';

export const transformHotelListingData = ({ hotelsList }) => {
  return (hotelsList || []).map(hotelListItem => {
    return {
      propertyImageUrl: get(hotelListItem, 'property.previewImage.url', ''),
      propertyTitle: get(hotelListItem, 'property.title', ''),
      propertyAddress: get(hotelListItem, 'property.address', []).join(','),
      propertyRating: get(hotelListItem, 'property.rating.ratingValue', 0),
      propertyOfferName: get(hotelListItem, 'offer.name', ''),
      propertyDisplayPrice: get(hotelListItem, 'offer.displayPrice.amount', 0),
      propertyDisplayCurrency: get(hotelListItem, 'offer.displayPrice.currency', 'AUD'),
      propertySavingsAmount: get(hotelListItem, 'offer.savings.amount', 0),
      propertyCancellationType: get(hotelListItem, 'offer.cancellationOption.cancellationType')
    };
  });
};

export const sortHotelListingsByPrice = ({ transformedHotelsListData, priceSortOrder }) => {
  return priceSortOrder === 'desc'
    ? transformedHotelsListData.sort((a, b) => b.propertyDisplayPrice - a.propertyDisplayPrice)
    : transformedHotelsListData.sort((a, b) => a.propertyDisplayPrice - b.propertyDisplayPrice);
};
