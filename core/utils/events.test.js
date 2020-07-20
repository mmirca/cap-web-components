import { dispatchCustomEvent } from './events';

describe('events', () => {

  describe('dispatchCustomEvent()', () => {

    test('should call the context\'s dispatchEvent method with a new custom event when called', () => {
      const context = {
        dispatchEvent: jest.fn()
      };
      const payload = Symbol();
      dispatchCustomEvent('custom-event', payload, context);
      const customEvent = context.dispatchEvent.mock.calls[0][0];
      expect(customEvent.type).toBe('custom-event');
      expect(customEvent.detail).toBe(payload);
    });

    test('should call the document\'s dispatchEvent method with a new custom event when called without context', () => {
      const documentSpy = jest.spyOn(window, 'dispatchEvent');
      const payload = Symbol();
      dispatchCustomEvent('custom-event', payload);
      const customEvent = documentSpy.mock.calls[0][0];
      expect(customEvent.type).toBe('custom-event');
      expect(customEvent.detail).toBe(payload);
      documentSpy.mockRestore();
    });

  });

});