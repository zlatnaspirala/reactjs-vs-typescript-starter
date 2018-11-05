import { Browser } from "../services/browser";

export function loadResponseStyle(browser: Browser) {

  /**
   *  Import main global css or any other file
   */
  require("../css/global-style.css");
  require("../css/animator.css");

  switch (browser.isMobile()) {

    case true:
    {
      console.log("mobile device detected.");

    }

    case false:
    {
      console.log("desktop device detected");

    }

    default:
     console.warn("browser has no detect any platform! This is browser object:" , browser);

  }

}
