import { action } from '@storybook/addon-actions';
import { getAsArray } from '../utils';

/**
 * To register events we provide a list of event names that should be listened
 * These are used to trigger Storybook actions where the user can see the event name and its payload
 * @param {Array} events
 */
export function registerEvents(events) {
  const DI = { window, action, document, getAsArray, ...this };
  DI.getAsArray(events).forEach((event) => {
    DI.window._registeredEvents = DI.window._registeredEvents || new Set();
    if (!DI.window._registeredEvents.has(event)) {
      DI.document.addEventListener(event, (ev) => DI.action(`CustomEvent: ${ev.type}`)(ev.detail));
      DI.window._registeredEvents.add(event);
    }
  });
}
