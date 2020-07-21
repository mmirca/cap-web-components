// manager.js
import { addons } from '@storybook/addons';
import CustomTheme from './custom-theme';

addons.setConfig({
  enableShortcuts: false,
  theme: CustomTheme
});
