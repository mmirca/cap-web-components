import { action } from '@storybook/addon-actions';
import { getAsArray } from '../utils';

/**
 * To register events we provide a list of event names that should be listened
 * These are used to trigger Storybook actions where the user can see the event name and its payload
 * @param {Array} events 
 */
export function registerEvents(events) {
  getAsArray(events).forEach((event) => {
    window._registredEvents = window._registredEvents || new Set();
    if (!window._registredEvents.has(event)) {
      document.addEventListener(event, (ev) => action(`CustomEvent: ${ev.type}`)(ev.detail));
      window._registredEvents.add(event);
    }
  });
}