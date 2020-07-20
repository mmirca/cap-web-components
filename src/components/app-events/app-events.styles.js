import { css } from 'lit-element';

export default css`
  :host {
    display: block;
    padding: 0 1.5rem;
    font-family: sans-serif;
    text-align: center;
    color: #111;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    line-height: 1.5em;
  }
  code {
    background: #e2e2e2;
    font-weight: bold;
    padding: 3px 6px;
    border-radius: 4px;
  }
  input, button {
    box-sizing: border-box;
    display: block;
    width: 100%;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    padding: 0.75em 1.75em;
  }
  input {
    margin-bottom: 16px;
    border: 1px solid lightgrey;
  }
  button {
    background: royalblue;
    color: white;
    font-weight: bold;
    border: none;
  }
`;
