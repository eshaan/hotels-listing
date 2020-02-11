import { px } from '../utils/style-utils';

const fonts = {
  default: 'Roboto'
};

const fontSizes = {
  default: px(12),
  heading: px(24),
  itemHeading: px(16),
  subHeading: px(14),
  mainPrice: px(30),
  savingsPrice: px(20),
  small: px(10)
};

const space = {
  oneX: px(5),
  twoX: px(10),
  threeX: px(15),
  fourX: px(20),
  fiveX: px(25),
  sixX: px(30),
  sevenX: px(35),
  tenX: px(50),
  header: px(60),
  large: px(80),
  half: px(40)
};

const colors = {
  gray: '#8e8e8e',
  offerHighlight: '#ff0000',
  cancellationHighlight: '#09a510'
};

const screenSizes = {
  xs: { min: 0, max: 479 },
  sm: { min: 480, max: 639 },
  md: { min: 640, max: 989 },
  lg: { min: 990, max: 1199 },
  xl: { min: 1200 }
};

const mediaSize = {
  smallMax: `(max-width: ${screenSizes.sm.max}px)`,
  mediumMax: `(max-width: ${screenSizes.md.max}px)`
};

const localTheme = {
  fonts,
  fontSizes,
  space,
  colors,
  mediaSize
};

export default localTheme;
