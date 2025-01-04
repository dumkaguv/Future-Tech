export default class CloseHeaderPromo {
  static selectors = {
    root: "[data-js-header]",
    headerPromo: "[data-js-header-promo]",
    closePromoButton: "[data-js-header-close-promo]",
  };

  static localStorageParams = {
    wasClosedInCurrentSession: "wasClosedInCurrentSession",
  };

  constructor() {
    this.rootElement = document.querySelector(
      CloseHeaderPromo.selectors.root
    );
    this.headerPromoElement = this.rootElement.querySelector(
      CloseHeaderPromo.selectors.headerPromo
    );
    this.closePromoButtonElement = this.rootElement.querySelector(
      CloseHeaderPromo.selectors.closePromoButton
    );
    this.bindEvents();
    this.renderHeaderPromo();
  }

  onPromoButton = () => {
    this?.headerPromoElement?.remove();
    this.setClosedInCurrentSession();
  };

  renderHeaderPromo() {
    const wasClosed = Boolean(localStorage.getItem(
      CloseHeaderPromo.localStorageParams.wasClosedInCurrentSession
    ));
    if (!wasClosed) {
      this.rootElement.insertAdjacentHTML("afterbegin", this.headerPromoHTML());
    }
  }

  bindEvents() {
    this?.closePromoButtonElement?.addEventListener(
      "click",
      this.onPromoButton
    );
  }

  setClosedInCurrentSession() {
    localStorage.setItem(
      CloseHeaderPromo.localStorageParams.wasClosedInCurrentSession,
      "true"
    );
  }

  headerPromoHTML() {
    return `
      <div class="header__promo" data-js-header-promo>
        <button
          class="header__promo-close button button--accent"
          type="button"
          aria-label="Close"
          title="Close"
          tabindex="0"
          data-js-header-close-promo
        >
          X
        </button>
        <a class="header__promo-link" href="./" data-js-header-promo-link>
          <span class="icon icon--arrow-top-right-yellow">
            Subscribe to our Newsletter For New & latest Blogs and
            Resources
          </span>
        </a>
      </div>
    `;
  }
}
