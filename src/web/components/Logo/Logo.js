import React, { Fragment } from 'react';
import styled from 'styled-components';
import qantasLogo from '../../icons/qantas-logo.png';
import theme from '../../constants/theme';

const Wrapper = styled.div`
  margin: ${theme.space.half} 0px;
`;

const StyledImage = styled.img`
  height: ${theme.space.half};
`;

const Logo = () => <Wrapper><StyledImage src={qantasLogo} alt="QantasHotels"></StyledImage></Wrapper>;

export default Logo;
