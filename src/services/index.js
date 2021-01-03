import { showSpinner } from "./util.js";
import { getStreets } from "./getStreets.js";
import { request, sendMessage } from "./requestChecker.js";

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  showSpinner();
  getStreets();
});
