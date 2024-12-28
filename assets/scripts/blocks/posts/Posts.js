class Posts {
  selectors = {
    root: "[data-js-posts]",
    likeIcon: "[data-js-post-like-icon]",
    likeButton: "[data-js-post-like-button]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.bindEvents();
  }

  onClick = (event) => {
    if (event?.target) {
      const likeButtonElement = event.target.closest(
        this.selectors.likeButton
      );

      if (likeButtonElement) {
        const likeIconElement = likeButtonElement.querySelector(
          this.selectors.likeIcon
        );

        likeIconElement.classList.toggle(this.stateClasses.isActive);
      }
    }
  };

  bindEvents() {
    this.rootElement.addEventListener("click", this.onClick);
  }
}

export default Posts;
