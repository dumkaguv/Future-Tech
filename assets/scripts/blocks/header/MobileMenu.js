import pxToRem from "../../utils/pxToRem.js";

export default class MobileMenu {
  static selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
    promoLink: "[data-js-header-promo-link]",
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
    this.promoLinkElement = this.rootElement.querySelector(
      MobileMenu.selectors.promoLink
    );
    this.promoLinkDesktopContent =
      "Subscribe to our Newsletter For New & latest Blogs and Resources";
    this.bindEvents();
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
    window.addEventListener("resize", this.reducePromoLinkContent);
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

  reducePromoLinkContent = () => {
    const widthInRem = pxToRem(window.innerWidth);
    const textElement = this.promoLinkElement?.firstElementChild;

    if (textElement && widthInRem <= 47.99) {
      textElement.textContent =
        "Subscribe to our Newsletter For Blogs and Resources";
    } else {
      textElement.textContent = this.promoLinkDesktopContent;
    }
  };
}
