export function dispatchCustomEvent(name, payload, context = window) {
  context.dispatchEvent(new CustomEvent(name, {
    composed: true,
    bubbles: true,
    detail: payload
  }));
}