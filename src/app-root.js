import { LitElement, html } from 'lit-element';
import { defineCustomElement } from '~core/utils';
import Variables from '~shared/variables';
import Styles from '~shared/styles';
import AppRootStyles from './app-root.styles';
import './components/app-events';

export class AppRoot extends LitElement {

  static get styles() {
    return [
      Variables,
      Styles,
      AppRootStyles
    ];
  }

  static get properties() {
    return {
      page: {
        type: String
      }
    };
  }

  render() {
    const router = {
      events: html`<app-events></app-events>`,
      default: this._getDefaultTemplate()
    };
    return html`
      <img src="assets/cap-cli.svg">
      <h1 class="h2">Welcome to cap-cli!</h1>
      ${ router[this.page] || router.default }
    `;
  }

  _getDefaultTemplate() {
    return html`
      <p>
        We are in \u{1F499}  with Web Components and think they are the future of the web.
        We created cap-cli so you can start using them anywhere, even in legacy apps.
      </p>
      <p>
        To get started you can take a look at the <code>app-root.js</code> file. Or start the demo server running <code>npm run demo</code> in your terminal.
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

defineCustomElement('app-root', AppRoot);