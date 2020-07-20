/**
 * To define a new custom element first check wether it already exists a registed element with the same tag
 * Then, if none exists, we register the new custom element
 * @param {String} name 
 * @param {Object} constructor 
 */
export function defineCustomElement(name, constructor, registry = customElements) {
  if (!registry.get(name)) {
    registry.define(name, constructor);
  }
}