import { css } from 'lit-element';

export default css`
  :host {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-900);
  }
  h1, .h1 {
    font-size: 4.25em;
    line-height: 1.14705882em;
    margin-top: 0.38235294em;
    margin-bottom: 0.76470588em;
  }
  h2, .h2 {
    font-size: 2.625em;
    line-height: 1.23809524em;
    margin-top: 0.61904762em;
    margin-bottom: 0.61904762em;
  }
  h3, .h3 {
    font-size: 1.625em;
    line-height: 1em;
    margin-top: 1em;
    margin-bottom: 0em;
  }
  h4, .h4 {
    font-size: 1em;
    line-height: 1.625em;
    margin-top: 1.625em;
    margin-bottom: 0em;
  }
  h5, .h5 {
    font-size: 1em;
    line-height: 1.625em;
    margin-top: 1.625em;
    margin-bottom: 0em;
  }
  p, ul, ol, pre, table, blockquote {
    margin-top: 0em;
    margin-bottom: 1.625em;
  }
  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
  }
  code {
    background: var(--grey-200);
    font-weight: bold;
    padding: var(--spacing-1x) var(--spacing-2x);
    border-radius: var(--spacing-1x);
  }
  input, button {
    font-size: 1rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: var(--spacing-1x);
    padding: var(--spacing-2x) var(--spacing-3x);
  }
  input {
    border: 1px solid var(--grey-400);
  }
  button {
    background: var(--primary-color);
    color: white;
    font-weight: bold;
    border: none;
  }
`;
