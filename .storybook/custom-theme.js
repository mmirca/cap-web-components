import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#7DD4E8',
  colorSecondary: '#395D63',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#eee',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#212121',
  textInverseColor: '#424242',

  // Toolbar default and active colors
  barTextColor: '#212121',
  barSelectedColor: '#395D63',
  barBg: '#7DD4E8',

  // Form colors
  inputBg: 'white',
  inputBorder: '#9e9e9e',
  inputTextColor: '#212121',
  inputBorderRadius: 4,

  brandTitle: 'Cap Catalog',
  brandUrl: 'https://github.com/mmirca/cap-web-components',
  brandImage: '/assets/cap-cli.svg',
});
