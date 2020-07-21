import { AppEvents } from './app-events';

describe('AppEvents', () => {

  let fixture;

  beforeEach(async () => {
    fixture = new AppEvents();
    document.body.appendChild(fixture);
    await fixture.updateComplete;
    fixture.dispatchEvent = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(fixture);
  });

  test('should attach the shadowRoot when instantiated', () => {
    expect(fixture.shadowRoot).toBeDefined();
  });

  test('should emit an "app-events-submit" event with the input value when form is submitted', () => {
    fixture.dispatchEvent = jest.fn();
    fixture.shadowRoot.querySelector('input').value = 'Cap';
    fixture.shadowRoot.querySelector('form').submit();
    const event = fixture.dispatchEvent.mock.calls[0][0];
    expect(event.type).toBe('app-events-submit');
    expect(event.detail).toBe('Welcome Cap!!');
  });

});