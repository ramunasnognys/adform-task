import { PRIME_URL } from "../enviroments/env.js";
import { hideSpinner } from "./util.js";

import axios from "axios";


export const getResponse = async () => {
  try {
    const response = await axios.get(PRIME_URL); // Promise resolve

    if (response) {
      hideSpinner();
    }

    return response.data.features;
  } catch (e) {
    console.log("!!!! ERRROR !!!!", e);
  }
};
