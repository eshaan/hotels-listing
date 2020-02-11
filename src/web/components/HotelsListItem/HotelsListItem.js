import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { cancellationTypes } from '../../constants/property';

const RowWrapper = styled.div`
  display: flex;
  margin: ${theme.space.twoX} 0px;
`;

const PropertyImageWrapper = styled.div`
  padding: 0px ${theme.space.oneX};
`;

const PropertyImage = styled.img`
  min-width: 145px;
  min-height: 125px;
`;

const PropertyInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

const PropertyDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px ${theme.space.twoX} ${theme.space.twoX} ${theme.space.twoX};
  justify-content: space-between;
`;

const PropertyPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px ${theme.space.twoX} ${theme.space.twoX} ${theme.space.twoX};
  justify-content: flex-end;
  text-align: end;
`;

const PropertyRatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  text-align: center;
`;

const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropertyTitle = styled.h1`
  font-size: ${theme.fontSizes.itemHeading};
`;

const PropertyAddress = styled.span`
  font-size: ${theme.fontSizes.subHeading};
  color: ${theme.colors.gray};
`;

const PropertyOffer = styled.span`
  font-size: ${theme.fontSizes.default};
  color: ${theme.colors.offerHighlight}
  text-decoration: underline;
`;

const PropertyCancellation = styled.span`
  font-size: ${theme.fontSizes.default};
  color: ${theme.colors.cancellationHighlight};
`;

const PropertyPrice = styled.span`
  font-size: ${theme.fontSizes.mainPrice};
`;

const PropertySavings = styled.span`
  font-size: ${theme.fontSizes.savingsPrice};
  color: ${theme.colors.offerHighlight};
`;

const PropertyCurrency = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
`;

const HotelsListItem = ({
  propertyImageUrl,
  propertyTitle,
  propertyAddress,
  propertyOfferName,
  propertyCancellationType,
  propertyDisplayPrice,
  propertySavingsAmount,
  propertyDisplayCurrency,
  propertyRating
}) => {
  return (
    <RowWrapper>
      <PropertyImageWrapper>
        <PropertyImage data-ref="property-image" src={propertyImageUrl}></PropertyImage>
      </PropertyImageWrapper>
      <PropertyInfo>
        <PropertyDetailsWrapper>
          <PropertyDetails>
            <PropertyTitle data-ref="property-title">{propertyTitle}</PropertyTitle>
            <PropertyAddress data-ref="property-address">{propertyAddress}</PropertyAddress>
          </PropertyDetails>
          <PropertyOffer data-ref="property-offer">{propertyOfferName}</PropertyOffer>
          <PropertyCancellation data-ref="property-cancellation">
            {cancellationTypes[propertyCancellationType]}
          </PropertyCancellation>
        </PropertyDetailsWrapper>
        <PropertyRatingsWrapper>
          <span data-ref="property-ratings">{`${propertyRating} /5`}</span>
        </PropertyRatingsWrapper>
        <PropertyPriceWrapper>
          <PropertyCurrency data-ref="property-currency-message">{`1 night total (${propertyDisplayCurrency})`}</PropertyCurrency>
          <PropertyPrice data-ref="property-price">{`$${propertyDisplayPrice}`}</PropertyPrice>
          {propertySavingsAmount > 0 && (
            <PropertySavings data-ref="property-savings">
              {`Save $${propertySavingsAmount}~`}
            </PropertySavings>
          )}
        </PropertyPriceWrapper>
      </PropertyInfo>
    </RowWrapper>
  );
};

HotelsListItem.propTypes = {
  propertyImageUrl: PropTypes.string,
  propertyTitle: PropTypes.string,
  propertyAddress: PropTypes.string,
  propertyOfferName: PropTypes.string,
  propertyCancellationType: PropTypes.string,
  propertyDisplayPrice: PropTypes.number,
  propertySavingsAmount: PropTypes.number,
  propertyDisplayCurrency: PropTypes.string,
  propertyRating: PropTypes.number
};

export default HotelsListItem;
