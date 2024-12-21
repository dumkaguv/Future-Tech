export default class MobileMenu {
  static selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
  };

  static stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    this.rootElement = document.querySelector(MobileMenu.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      MobileMenu.selectors.overlay
    );
    this.burgerButtonElement = this.rootElement.querySelector(
      MobileMenu.selectors.burgerButton
    );
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(
      MobileMenu.stateClasses.isActive
    );
    this.overlayElement.classList.toggle(MobileMenu.stateClasses.isActive);
    document.documentElement.classList.toggle(
      MobileMenu.stateClasses.isLock
    );
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}
