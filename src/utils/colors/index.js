export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  purple: '#7126B5',
  LightPurple: '#E2D4F0',
  green: '#73CA5C',
  orange: '#FFE9C9',
  gray: '#8A8A8A',
  LightGray: '#D0D0D0',
  brown: '#3C3C3C',
  darkBrown: '#151515',
  red: '#FF0000',
};

const mainColor = {
  white: '#FFFFFF',
  black: '#000000',
  purple: '#7126B5',
  purpleLight: '#E2D4F0',
  green: '#73CA5C',
  orange: '#FFE9C9',
  gray: '#8A8A8A',
  gray2: '#D0D0D0',
  brown: '#3C3C3C',
  darkbrown: '#151515',
  red: '#FF0000',
};

export const colors = {
  background: {
    primary: mainColor.white,
    secondary: mainColor.orange,
  },
  text: {
    white: mainColor.white,
    black: mainColor.black,
    gray: mainColor.gray,
    brown: mainColor.brown,
    darkbrown: mainColor.darkbrown,
  },
  button: {
    active: mainColor.purple,
    disable: mainColor.purpleLight,
  },
  border: {
    gray: mainColor.gray2,
  },
  alert: {
    green: mainColor.green,
    red: mainColor.red,
  },
};
