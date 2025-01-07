import Header from "../blocks/header/Header.js";
import VideoPlayerCollection from "../blocks/video-player/VideoPlayer.js";

import defineHeaderHeightCSSVar from "../utils/defineHeaderHeightCSSVar.js";

document.addEventListener("DOMContentLoaded", () => {
  defineHeaderHeightCSSVar();

  new Header();
  new VideoPlayerCollection();
});
