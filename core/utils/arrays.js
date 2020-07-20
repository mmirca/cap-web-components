import { isDefined } from './objects';

/**
 * To get as an Array we transform any value to an Array
 * then we filter out the `null` and `undefined` values
 * @param {*} obj 
 * @returns {Array}
 */
export function getAsArray(obj) {
  return [].concat(obj).filter(isDefined);
}
