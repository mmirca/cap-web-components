import { isDefined } from './objects';

describe('objects', () => {

  describe('isDefined()', () => {

    test('should return false when the value is `null`', () => {
      expect(isDefined(null)).toBeFalsy();
    });

    test('should return false when the value is `undefined`', () => {
      expect(isDefined(null)).toBeFalsy();
    });

    test('should return true when the value is `false`', () => {
      expect(isDefined(false)).toBeTruthy();
    });

    test('should return true when the value is a String', () => {
      expect(isDefined('a string')).toBeTruthy();
    });

  });

});