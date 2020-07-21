import { css } from 'lit-element';

export default css`
  :host {
    display: block;
    text-align: center;
  }
  input, button {
    display: block;
    width: 100%;
  }
  input {
    margin-bottom: var(--spacing-3x);
  }
`;
