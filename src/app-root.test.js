import { AppRoot } from './app-root';

describe('AppRoot', () => {

  /**
   * We initialize a variable where we store the reference to the component we are
   * testing for each case
   */
  let fixture;

  /**
   * Jest unit tests are powered by a virtual DOM using JSDOM (https://github.com/jsdom/jsdom)
   * Before running each case we need to setup the virtual DOM by attaching our component and
   * waiting for it to finish updating (https://lit-element.polymer-project.org/guide/lifecycle#updatecomplete)
   * 
   * To test events you can use the provided dispatchEvent stub, for more information about stubs
   * you can check the jest mock functions docs (https://jestjs.io/docs/en/mock-functions.html)
   */
  beforeEach(async () => {
    fixture = new AppRoot();
    document.body.appendChild(fixture);
    await fixture.updateComplete;
    fixture.dispatchEvent = jest.fn();
  });

  /**
   * For better tests performance it is recommended to keep a lean virtual DOM, in order to
   * accomplish this we remove the used component instance after each case
   */
  afterEach(() => {
    document.body.removeChild(fixture);
  });

  test('should attach the shadowRoot when instantiated', () => {
    expect(fixture.shadowRoot).toBeDefined();
  });

});