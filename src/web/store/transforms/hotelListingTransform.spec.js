import { transformHotelListingData, sortHotelListingsByPrice } from './hotelListingTransform';
import { expect } from 'chai';

describe('hotelListingTransform', () => {
  describe('transformHotelListingData', () => {
    describe('when hotelsList is empty', () => {
      it('should transform to blank array', () => {
        const result = transformHotelListingData({ hotelsList: [] });
        expect(result).to.eql([]);
      });
    });

    describe('when hotelsList has data', () => {
      const hotelsData = [
        {
          id: 'cxd650nuyo',
          property: {
            propertyId: 'P107801',
            title: 'Courtyard by Marriott Sydney-North Ryde',
            address: ['7-11 Talavera Rd', 'North Ryde'],
            previewImage: {
              url: 'https://unsplash.it/145/125/?random',
              caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
              imageType: 'PRIMARY'
            },
            rating: {
              ratingValue: 4.5,
              ratingType: 'self'
            }
          },
          offer: {
            promotion: {
              title: 'Exclusive Deal',
              type: 'MEMBER'
            },
            name: 'Deluxe Balcony Room',
            displayPrice: {
              amount: 329.0,
              currency: 'AUD'
            },
            savings: {
              amount: 30.0,
              currency: 'AUD'
            },
            cancellationOption: {
              cancellationType: 'NOT_REFUNDABLE'
            }
          }
        }
      ];

      it('should join the array of addresses to single string', () => {
        const expectedAddress = hotelsData[0].property.address.join(',');
        const result = transformHotelListingData({ hotelsList: hotelsData });

        expect(result[0].propertyAddress).to.equal(expectedAddress);
      });

      it('should map hotelList data to required property information', () => {
        const result = transformHotelListingData({ hotelsList: hotelsData });
        const expectedTransformedResult = {
          propertyAddress: '7-11 Talavera Rd,North Ryde',
          propertyCancellationType: 'NOT_REFUNDABLE',
          propertyDisplayCurrency: 'AUD',
          propertyDisplayPrice: 329,
          propertyImageUrl: 'https://unsplash.it/145/125/?random',
          propertyOfferName: 'Deluxe Balcony Room',
          propertyRating: 4.5,
          propertySavingsAmount: 30,
          propertyTitle: 'Courtyard by Marriott Sydney-North Ryde'
        };
        expect(result).to.eql([expectedTransformedResult]);
      });
    });
  });

  describe('sortHotelListingsByPrice', () => {
    const transformedHotelsListData = [
      {
        propertyAddress: 'Property 1 Address',
        propertyDisplayPrice: 329,
        propertyImageUrl: 'https://unsplash.it/145/125/?random',
        propertyTitle: 'Property 1'
      },
      {
        propertyAddress: 'Property 2 Address',
        propertyDisplayPrice: 300,
        propertyImageUrl: 'https://unsplash.it/145/125/?random',
        propertyTitle: 'Property 2'
      },
      {
        propertyAddress: 'Property 3 Address',
        propertyDisplayPrice: 390,
        propertyImageUrl: 'https://unsplash.it/145/125/?random',
        propertyTitle: 'Property 3'
      }
    ];
    describe('when price sort order is not provided', () => {
      it('should return transformed hotel data in ascending order by default', () => {
        const actual = sortHotelListingsByPrice({ transformedHotelsListData });
        const expected = transformedHotelsListData.sort(
          (a, b) => a.propertyDisplayPrice - b.propertyDisplayPrice
        );

        expect(actual).to.eql(expected);
      });
    });

    describe('when price sort order is provided as desc', () => {
      it('should return transformed hotel data in descending order by display price', () => {
        const actual = sortHotelListingsByPrice({ transformedHotelsListData });
        const expected = transformedHotelsListData.sort(
          (a, b) => b.propertyDisplayPrice - a.propertyDisplayPrice
        );

        expect(actual).to.eql(expected);
      });
    });
  });
});
