import Header from "../blocks/header/Header.js";

import defineHeaderHeightCSSVar from "../utils/defineHeaderHeightCSSVar.js";

document.addEventListener("DOMContentLoaded", () => {
  defineHeaderHeightCSSVar();

  new Header();
});
