import { isDefined } from './objects';

/**
 * To get as an Array we transform any value to an Array
 * then we filter out the `null` and `undefined` values
 * @returns {Array}
 */
export function getAsArray(...args) {
  return [].concat(...args).filter(isDefined);
}
