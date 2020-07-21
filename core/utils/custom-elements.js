/**
 * To define a new custom element first check wether it already exists a registed element with the same tag
 * Then, if none exists, we register the new custom element
 * @param {String} name 
 * @param {Object} constructor 
 */
export function defineCustomElement(name, constructor) {
  const DI = { customElements, ...this };
  if (!DI.customElements.get(name)) {
    DI.customElements.define(name, constructor);
  }
}