import { css } from 'lit-element';

export default css`
  :host {
    display: block;
    padding: 1.5rem;
    font-family: sans-serif;
    text-align: center;
    color: #111;
    min-width: 350px;
    max-width: 650px;
    margin: 0 auto;
  }
  code {
    background: #e2e2e2;
    font-weight: bold;
    padding: 3px 6px;
    border-radius: 4px;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    line-height: 1.5em;
  }
  a {
    color: royalblue;
    text-decoration: none;
    font-weight: bold;
  }
  img {
    width: 250px;
  }
`;
