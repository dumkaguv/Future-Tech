import pxToRem from "./pxToRem.js";

const headerElement = document.querySelector(".header");

function onResize() {
  document.documentElement.style.setProperty(
    "--header-height",
    `${pxToRem(headerElement.offsetHeight)}rem`
  );
}

function defineHeaderHeightCSSVar() {
  onResize();

  const resizeObserver = new ResizeObserver(onResize);
  resizeObserver.observe(headerElement);
}

export default defineHeaderHeightCSSVar;
