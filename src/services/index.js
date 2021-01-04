import { showSpinner } from "./util.js";
import { getStreets } from "./getStreets.js";
import { controlledGetFromApi } from "./concurrencyController.js";

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  showSpinner();
  getStreets();
});
