class Posts {
  selectors = {
    likeIcon: "[data-js-post-like-icon]",
    likeButton: "[data-js-post-like-button]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  constructor() {
    this.likeButtonElements = document.querySelectorAll(
      this.selectors.likeButton
    )
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
    this.likeButtonElements.forEach((element) => {
      element.addEventListener("click", this.onClick);
    })
  }
}

export default Posts;
