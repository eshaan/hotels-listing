import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import HotelsListItem from '../../components/HotelsListItem/HotelsListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HotelsCount = styled.p`
  font-size: ${theme.fontSizes.default};
`;

class Hotels extends Component {
  componentDidMount() {
    this.props.getHotelsListing();
  }

  render() {
    const { hotelsList } = this.props;

    return (
      <Wrapper>
        {hotelsList && hotelsList.length > 0 && (
          <HotelsCount data-ref="hotels-count">{`${hotelsList.length} hotels in Sydney.`}</HotelsCount>
        )}
        {hotelsList.map((hotelListItem, index) => (
          <HotelsListItem
            key={`hotel-${index}`}
            propertyImageUrl={hotelListItem.propertyImageUrl}
            propertyTitle={hotelListItem.propertyTitle}
            propertyAddress={hotelListItem.propertyAddress}
            propertyOfferName={hotelListItem.propertyOfferName}
            propertyCancellationType={hotelListItem.propertyCancellationType}
            propertyDisplayPrice={hotelListItem.propertyDisplayPrice}
            propertySavingsAmount={hotelListItem.propertySavingsAmount}
            propertyDisplayCurrency={hotelListItem.propertyDisplayCurrency}
            propertyRating={hotelListItem.propertyRating}
          />
        ))}
      </Wrapper>
    );
  }
}

Hotels.propTypes = {
  hotelsList: PropTypes.array,
  getHotelsListing: PropTypes.func.isRequired
};

Hotels.defaultProps = {
  hotelsList: []
};

export default Hotels;
