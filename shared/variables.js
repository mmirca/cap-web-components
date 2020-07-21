import { css } from 'lit-element';

export default css`
  :host {
    --primary-color: var(--cap-primary-color, #395D63);
    --secondary-color: var(--cap-primary-color, #7DD4E8);
    --grey-50: var(--cap-grey-50, #fafafa);
    --grey-100: var(--cap-grey-100, #f5f5f5);
    --grey-200: var(--cap-grey-200, #eee);
    --grey-300: var(--cap-grey-300, #e0e0e0);
    --grey-400: var(--cap-grey-400, #bdbdbd);
    --grey-500: var(--cap-grey-500, #9e9e9e);
    --grey-600: var(--cap-grey-600, #757575);
    --grey-700: var(--cap-grey-700, #616161);
    --grey-800: var(--cap-grey-800, #424242);
    --grey-900: var(--cap-grey-900, #212121);
    --spacing-1x: var(--cap-spacing-1x, 4px);
    --spacing-2x: var(--cap-spacing-2x, 8px);
    --spacing-3x: var(--cap-spacing-3x, 16px);
    --spacing-4x: var(--cap-spacing-4x, 24px);
    --spacing-5x: var(--cap-spacing-5x, 32px);
    --spacing-6x: var(--cap-spacing-6x, 48px);
  }
`;
