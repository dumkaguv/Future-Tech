import getInitialAllTabsData from "./allTabsData.js";
import allTabsDataNewsPage from "./allTabsDataNewsPage.js";
import Posts from "../posts/Posts.js";

const rootSelector = "[data-js-tabs]";
const postSelector = "[data-js-post]";
const postsSelector = "[data-js-posts]";

class Tabs {
  selectors = {
    root: rootSelector,
    button: "[data-js-tabs-button]",
    buttonTitle: "[data-js-tabs-button-title]",
    postCategory: "[data-js-post-category]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  stateAttributes = {
    ariaSelected: "aria-selected",
    tabIndex: "tabindex",
  };

  constructor(rootElement, isNewsPage = false) {
    this.rootElement = rootElement;
    this.buttonElements = this.rootElement.querySelectorAll(
      this.selectors.button
    );
    this.buttonTitleElements = this.rootElement.querySelectorAll(
      this.selectors.buttonTitle
    );
    this.state = {
      activeTabIndex: [...this.buttonElements].findIndex((buttonElement) =>
        buttonElement.classList.contains(this.stateClasses.isActive)
      ),
    };
    this.isNewsPage = isNewsPage;
    this.limitTabsIndex = this.buttonElements.length - 1;
    this.bindEvents();
  }

  updateTabContent(activeTabIndex) {
    document.querySelector(postsSelector).remove();
    const initialData = this.isNewsPage
      ? allTabsDataNewsPage()
      : getInitialAllTabsData();
    this.rootElement.insertAdjacentHTML("afterend", initialData);

    if (activeTabIndex === 0) {
      return;
    }

    const buttonTitleElement =
      this.buttonTitleElements[activeTabIndex].textContent.trim();
    const postsElement = document.querySelectorAll(postSelector);

    postsElement.forEach((post) => {
      const postCategory = post
        .querySelector(this.selectors.postCategory)
        .dataset.jsPostCategory.trim();

      if (postCategory !== buttonTitleElement) {
        post?.remove();
      }
    });

    if (
      !document
        .querySelector(".posts__list")
        .querySelectorAll(postSelector).length
    ) {
    }
  }

  updateUI() {
    const { activeTabIndex } = this.state;

    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIndex;
      const buttonTitleElement = this.buttonTitleElements[index];

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive);
      buttonTitleElement.classList.toggle(
        this.stateClasses.isActive,
        isActive
      );
    });

    
    this.updateTabContent(activeTabIndex);
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex;
    this.updateUI();
    new Posts();
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener("click", () =>
        this.onButtonClick(index)
      );
      buttonElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          this.onButtonClick(index);
        }
      });
    });
  }
}

class TabsCollection {
  constructor(isNewsPage = false) {
    this.isNewsPage = isNewsPage;
    this.init();
  }

  init() {
    document
      .querySelectorAll(rootSelector)
      .forEach((element) => new Tabs(element, this.isNewsPage));
  }
}

export default TabsCollection;
