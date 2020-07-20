import { LitElement, html } from 'lit-element';
import { defineCustomElement, dispatchCustomEvent } from '~core/utils';
import AppEventsStyles from './app-events.styles';

export class AppEvents extends LitElement {

  static get styles() {
    return AppEventsStyles;
  }
  
  render() {
    return html`
      <p>
        The framework's mission is to make your life easier while developing web components. There are some useful methods you can use right aways in the <code>core</code> folder.
      </p>
      <p>
        Let's start by using <code>registerEvents</code> to showcase some events using the Storybook actions.
      </p>
      <form @submit=${this._handleSubmit}>
        <input
          name="username"
          placeholder="Enter your name"
          autocomplete="off"
        >
        <button type="submit">SEND</button>
      </form>
    `;
  }

  _handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    dispatchCustomEvent('app-events-submit', `Welcome ${formData.get('username')}!!`, this);
  }

}

defineCustomElement('app-events', AppEvents);