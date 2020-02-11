import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HotelsListItem from './HotelsListItem';
import { cancellationTypes } from '../../constants/property';

describe('HotelsListItem', () => {
  it('should render', () => {
    const wrapper = shallow(<HotelsListItem />);
    expect(wrapper.exists()).to.be.true;
  });

  it('should render Property image with src as image url', () => {
    const expectedImageURL = '//test-image-url';
    const wrapper = shallow(<HotelsListItem propertyImageUrl={expectedImageURL} />);
    // console.log(wrapper.debug());
    expect(wrapper.find('[data-ref="property-image"]').props().src).to.equal(expectedImageURL);
  });

  it('should render Property title as passed in title', () => {
    const expectedPropertyTitle = 'Property 1';
    const wrapper = shallow(<HotelsListItem propertyTitle={expectedPropertyTitle} />);

    expect(wrapper.find('[data-ref="property-title"]').text()).to.equal(expectedPropertyTitle);
  });

  it('should render Property address as passed in address', () => {
    const expectedPropertyAddress = 'Property 1 Address';
    const wrapper = shallow(<HotelsListItem propertyAddress={expectedPropertyAddress} />);

    expect(wrapper.find('[data-ref="property-address"]').text()).to.equal(expectedPropertyAddress);
  });

  it('should render Property offer as passed in offer', () => {
    const expectedPropertyOffer = 'Property 1 Deluxe Balcony Room';
    const wrapper = shallow(<HotelsListItem propertyOfferName={expectedPropertyOffer} />);

    expect(wrapper.find('[data-ref="property-offer"]').text()).to.equal(expectedPropertyOffer);
  });

  describe('when passed in cancellation type is NOT_REFUNDABLE', () => {
    it('should render not refundable text', () => {
      const cancellationType = 'NOT_REFUNDABLE';
      const wrapper = shallow(<HotelsListItem propertyCancellationType={cancellationType} />);

      expect(wrapper.find('[data-ref="property-cancellation"]').text()).to.equal(
        cancellationTypes[cancellationType]
      );
    });
  });

  describe('when passed in cancellation type is FREE_CANCELLATION', () => {
    it('should render free cancellation text', () => {
      const cancellationType = 'FREE_CANCELLATION';
      const wrapper = shallow(<HotelsListItem propertyCancellationType={cancellationType} />);

      expect(wrapper.find('[data-ref="property-cancellation"]').text()).to.equal(
        cancellationTypes[cancellationType]
      );
    });
  });

  it('should render Property rating as passed in rating out of 5', () => {
    const propertyRating = 4.5;
    const expectedPropertyRating = `${propertyRating} /5`;
    const wrapper = shallow(<HotelsListItem propertyRating={propertyRating} />);

    expect(wrapper.find('[data-ref="property-ratings"]').text()).to.equal(expectedPropertyRating);
  });

  it('should render Property currency message with passed in currency', () => {
    const currency = 'AUD';
    const expectedCurrencyText = `1 night total (${currency})`;
    const wrapper = shallow(<HotelsListItem propertyDisplayCurrency={currency} />);

    expect(wrapper.find('[data-ref="property-currency-message"]').text()).to.equal(
      expectedCurrencyText
    );
  });

  it('should render Property price with passed in display price', () => {
    const displayPrice = 249;
    const expectedDisplayPrice = `$${displayPrice}`;
    const wrapper = shallow(<HotelsListItem propertyDisplayPrice={displayPrice} />);

    expect(wrapper.find('[data-ref="property-price"]').text()).to.equal(expectedDisplayPrice);
  });

  describe('when property savings are not passed in', () => {
    it('should not render property savings amount', () => {
      const wrapper = shallow(<HotelsListItem />);

      expect(wrapper.find('[data-ref="property-savings"]').exists()).to.be.false;
    });
  });

  describe('when property savings amount is 0', () => {
    it('should not render property savings amount', () => {
      const wrapper = shallow(<HotelsListItem propertySavingsAmount={0} />);

      expect(wrapper.find('[data-ref="property-savings"]').exists()).to.be.false;
    });
  });

  describe('when property savings amount is greater than 0', () => {
    it('should render property savings amount', () => {
      const propertySavingsAmount = 380;
      const expectedPropertySavingsAmount = `Save $${propertySavingsAmount}~`;

      const wrapper = shallow(<HotelsListItem propertySavingsAmount={propertySavingsAmount} />);

      expect(wrapper.find('[data-ref="property-savings"]').text()).to.equal(
        expectedPropertySavingsAmount
      );
    });
  });
});
