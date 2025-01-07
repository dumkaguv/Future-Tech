import MobileMenu from "./MobileMenu.js";
import CloseHeaderPromo from "./CloseHeaderPromo.js";

export default class Header {
  constructor() {
    this.init();
  }

  init() {
    new MobileMenu();
    new CloseHeaderPromo();
  }
}
