import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from './web/constants/theme';
import Logo from './web/components/Logo';
import Hotels from './web/views/Hotels';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.default};
    margin: ${theme.space.fourX};
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Logo />
        <Hotels />
      </Fragment>
    );
  }
}

export default App;
