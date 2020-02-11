import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Hotels from './Hotels';

describe('Hotels', () => {
  const sandbox = sinon.createSandbox();
  afterEach(() => {
    sandbox.reset();
  });
  after(() => {
    sandbox.restore();
  });

  const getHotelsListingStub = sandbox.stub();

  const hotelWithSavings = {
    propertyImageUrl: '//test-image-1.jpeg',
    propertyTitle: 'Hotel 1',
    propertyAddress: 'Hotel 1 Address',
    propertyRating: 4.5,
    propertyOfferName: 'Deluxe Balcony Room',
    propertyDisplayPrice: 329,
    propertyDisplayCurrency: 'AUD',
    propertySavingsAmount: 30,
    propertyCancellationType: 'NOT_REFUNDABLE'
  };
  const hotelWithoutSavings = {
    propertyImageUrl: '//test-image-2.jpeg',
    propertyTitle: 'Hotel 2',
    propertyAddress: 'Hotel 2 Address',
    propertyRating: 3.5,
    propertyOfferName: 'Deluxe King',
    propertyDisplayPrice: 375,
    propertyDisplayCurrency: 'AUD',
    propertySavingsAmount: 0,
    propertyCancellationType: 'FREE_CANCELLATION'
  };
  const dummyHotelsList = [
    hotelWithSavings, hotelWithoutSavings
    ]

  it('should render', () => {
    const wrapper = shallow(<Hotels getHotelsListing={getHotelsListingStub} />);
    expect(wrapper.exists()).to.be.true;
  });

  describe('on component mount', () => {
    it('should fetch hotels data', () => {
      shallow(<Hotels getHotelsListing={getHotelsListingStub} />);
      sinon.assert.calledOnce(getHotelsListingStub);
    });
  });

  describe('when hotels data fetched', () => {
    describe('when no hotel properties found', () => {
      it('should render No records found error message');

      it('should not render no. of hotels count', () => {
        const wrapper = shallow(<Hotels getHotelsListing={getHotelsListingStub} hotelsList={[]} />);
        expect(wrapper.find('[data-ref="hotels-count"]').exists()).to.be.false;
      })
    })

    describe('when 2 hotel properties found', () => {
      it('should render no. of hotels count', () => {
        const wrapper = shallow(<Hotels getHotelsListing={getHotelsListingStub} hotelsList={dummyHotelsList} />);
        expect(wrapper.find('[data-ref="hotels-count"]').text()).to.equal('2 hotels in Sydney.');
      })

      it('should render 2 properties', () => {
        const wrapper = shallow(<Hotels getHotelsListing={getHotelsListingStub} hotelsList={dummyHotelsList} />);
        expect(wrapper.find('HotelsListItem').length).to.equal(2);
      });
    });
  });

  describe('when there was an error in fetching hotels data', () => {
    it('should render error message');
  });

  it('should sort items by price low-to-high by default');

  describe('when sort order changed to high-to-low', () => {
    it('should sort by high-to-low prices')
  })
});
