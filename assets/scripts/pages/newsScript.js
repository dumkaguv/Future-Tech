import Header from "../blocks/header/Header.js";
import TabsCollection from "../blocks/tabs/Tabs.js";
import Posts from "../blocks/posts/Posts.js";

document.addEventListener("DOMContentLoaded", () => {
  new Header();
  new TabsCollection(true);
  new Posts();
});
