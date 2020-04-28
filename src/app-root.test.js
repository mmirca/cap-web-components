import { AppRoot } from './app-root';

describe('AppRoot', () => {

  let fixture;

  beforeEach(async () => {
    fixture = new AppRoot();
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

});