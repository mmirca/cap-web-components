/**
 * To dispatch a custom event we emit a new custom event using the provided values
 * from the provided element as context
 * @param {String} name 
 * @param {*} payload 
 * @param {Object} context Element that should emit the event, defaults to `window`
 */
export function dispatchCustomEvent(name, payload, context = window) {
  context.dispatchEvent(new CustomEvent(name, {
    composed: true,
    bubbles: true,
    detail: payload
  }));
}