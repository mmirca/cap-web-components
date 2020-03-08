import { LitElement, html } from 'lit-element';
import AppRootStyles from './app-root.styles';

export class AppRoot extends LitElement {
  static get styles() {
    return AppRootStyles;
  }
  render() {
    return html`
      <img src="assets/cap-cli.svg">
      <h1>Welcome to cap-cli!</h1>
      <p>
        We are in \u{1F499} with Web Components and think they are the future of the web.
        We created cap-cli so you can start using them anywhere, even in legacy apps.
      </p>
      <p>
        To get started you can take a look at the <code>app-root.js</code> file.
      </p>
      <a
        href="https://github.com/mmirca/cap-web-components"
        target="_blank"
        noopener
        noreferrer
      >
        If you get lost, check the docs \u{1F4C3}
      </a>
    `;
  }
}

customElements.define('app-root', AppRoot);