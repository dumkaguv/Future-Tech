export default class CloseHeaderPromo {
  static selectors = {
    root: "[data-js-header]",
    headerPromo: "[data-js-header-promo]",
    closePromoButton: "[data-js-header-close-promo]",
  };

  static sessionStorageParams = {
    wasClosedInCurrentSession: "wasClosedInCurrentSession",
  };

  constructor() {
    this.rootElement = document.querySelector(
      CloseHeaderPromo.selectors.root
    );
    this.bindEvents();
    this.renderHeaderPromo();
  }

  onPromoButton = (event) => {
    const closeButton = event.target.closest(
      CloseHeaderPromo.selectors.closePromoButton
    );
    if (closeButton) {
      const promoElement = closeButton.closest(
        CloseHeaderPromo.selectors.headerPromo
      );
      promoElement?.remove();
      this.setClosedInCurrentSession();
    }
  };

  renderHeaderPromo() {
    const wasClosed = Boolean(
      sessionStorage.getItem(
        CloseHeaderPromo.sessionStorageParams.wasClosedInCurrentSession
      )
    );
    if (!wasClosed) {
      this.rootElement.insertAdjacentHTML(
        "afterbegin",
        this.headerPromoHTML()
      );
    }
  }

  bindEvents() {
    // Делегирование событий: добавляем обработчик на корневой элемент
    this.rootElement.addEventListener("click", this.onPromoButton);
  }

  setClosedInCurrentSession() {
    sessionStorage.setItem(
      CloseHeaderPromo.sessionStorageParams.wasClosedInCurrentSession,
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
