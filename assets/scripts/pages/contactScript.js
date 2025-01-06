import Header from "../blocks/header/Header.js";
import AccordionCollection from "../blocks/accordion/Accordion.js";

import defineHeaderHeightCSSVar from "../utils/defineHeaderHeightCSSVar.js";

document.addEventListener("DOMContentLoaded", () => {
  defineHeaderHeightCSSVar();

  new Header();
  new AccordionCollection()
});
