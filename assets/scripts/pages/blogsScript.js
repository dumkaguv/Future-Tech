import Header from "../blocks/header/Header.js";
import Posts from "../blocks/posts/Posts.js";
import ExpandableContentCollection from "../blocks/expandable-content/ExpandableContent.js";

import defineHeaderHeightCSSVar from "../utils/defineHeaderHeightCSSVar.js";

document.addEventListener("DOMContentLoaded", () => {
  defineHeaderHeightCSSVar();

  new Header();
  new Posts();
  new ExpandableContentCollection();
});
