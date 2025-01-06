import pxToRem from "../../utils/pxToRem.js";

const rootSelector = "[data-js-accordion]";

class Accordion {
  selectors = {
    accordionItemElement: "[data-js-accordion-item]",
    accordionContentElement: "[data-js-accordion-content]",
  };

  stateClasses = {
    isExpanded: "is-expanded",
  };

  stateAttributes = {
    ariaExpanded: "aria-expanded",
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.accordionItemElements = rootElement.querySelectorAll(
      this.selectors.accordionItemElement
    );
    this.bindEvents();
    this.animate(this.accordionItemElements[0]);
  }

  toggleContent(element) {
    const isExpanded = element.classList.contains(
      this.stateClasses.isExpanded
    );

    if (isExpanded) {
      element.classList.remove(this.stateClasses.isExpanded);
      this.animate(element);
      this.setAttributes(element, false);
    } else {
      element.classList.add(this.stateClasses.isExpanded);
      this.animate(element);
      this.setAttributes(element, true);
    }
  }

  setAttributes(element, isExpanded = false) {
    if (isExpanded) {
      element.setAttribute(this.stateAttributes.ariaExpanded, "true");
    } else {
      element.setAttribute(this.stateAttributes.ariaExpanded, "false");
    }
  }

  animate(element) {
    const content = element.querySelector(
      this.selectors.accordionContentElement
    );
  
    const computedStyle = window.getComputedStyle(content);
    const paddingTop = parseFloat(
      computedStyle.getPropertyValue("--padding-top-body-content")
    ) || 0;
  
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${pxToRem(content.scrollHeight + paddingTop)}rem`;
    }
  }

  onClick = (event) => {
    const element = event?.target?.closest(
      this.selectors.accordionItemElement
    );

    if (element) {
      this.toggleContent(element);
    }
  };

  bindEvents() {
    this.accordionItemElements.forEach((element) => {
      element.addEventListener("click", this.onClick);
      element.addEventListener("keydown", (event) => {
        if (event?.key === "Enter") {
          this.onClick(event);
        }
      });
    });
  }
}

class AccordionCollection {
  constructor() {
    this.init();
  }

  init() {
    document
      .querySelectorAll(rootSelector)
      .forEach((element) => new Accordion(element));
  }
}

export default AccordionCollection;
