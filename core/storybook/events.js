import { action } from '@storybook/addon-actions';
import { getAsArray } from '../utils';

export function registerEvents(events) {
  getAsArray(events).forEach((event) => {
    window._registredEvents = window._registredEvents || new Set();
    if (!window._registredEvents.has(event)) {
      document.addEventListener(event, (ev) => action(`CustomEvent: ${ev.type}`)(ev.detail));
      window._registredEvents.add(event);
    }
  });
}