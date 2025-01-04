import Header from "../blocks/header/Header.js";
import VideoPlayerCollection from "../blocks/video-player/VideoPlayer.js";
import TabsCollection from "../blocks/tabs/Tabs.js";
import Posts from "../blocks/posts/Posts.js";

import defineHeaderHeightCSSVar from "../utils/defineHeaderHeightCSSVar.js";

document.addEventListener("DOMContentLoaded", () => {
  defineHeaderHeightCSSVar();

  new Header();
  new TabsCollection(["Resources"]);
  new Posts();
  new VideoPlayerCollection();
});
