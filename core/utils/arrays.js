import { isDefined } from './objects';

export function getAsArray(obj) {
  return [].concat(obj).filter(isDefined);
}
