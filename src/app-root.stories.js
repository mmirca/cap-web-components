import './app-root';
import { registerEvents } from '~core/storybook/events';

registerEvents([
  'app-events-submit'
]);

export default {
  title: 'app-root'
};

export const welcome = () => `<app-root></app-root>`;

export const withEvents = () => `<app-root page="events"><app-root>`;