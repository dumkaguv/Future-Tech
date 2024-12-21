export default class CloseHeaderPromo {
  static selectors = {
    root: "[data-js-header]",
    headerPromo: "[data-js-header-promo]",
    closePromoButton: "[data-js-header-close-promo]",
  }

  constructor() {
    this.rootElement = document.querySelector(CloseHeaderPromo.selectors.root);
    this.headerPromoElement = this.rootElement.querySelector(CloseHeaderPromo.selectors.headerPromo);
    this.closePromoButtonElement = this.rootElement.querySelector(CloseHeaderPromo.selectors.closePromoButton);
    this.bindEvents();
  }

  onPromoButton = () => {
    this?.headerPromoElement?.remove();
  }

  bindEvents() {
    this.closePromoButtonElement.addEventListener("click", this.onPromoButton);
  }
}