import { getAsArray } from './arrays';

describe('Arrays', () => {

  describe('getAsArray()', () => {
    
    test('should return an empty array when called', () => {
      expect(getAsArray()).toEqual([]);
    });
    
    test('should return an empty array when called with null', () => {
      expect(getAsArray(null)).toEqual([]);
    });
    
    test('should return an empty array when called with undefined', () => {
      expect(getAsArray(undefined)).toEqual([]);
    });
    
    test('should return an array with an object when called with and object', () => {
      const obj = {};
      expect(getAsArray(obj)).toEqual([obj]);
    });
    
    test('should return an array with multiple values when called with multiple arguments', () => {
      expect(getAsArray(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
    });

  });

});