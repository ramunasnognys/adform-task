import { getResponse } from "./getAPIResponse.js";
const { makeControlled } = require("concurrency-control");

// a concurrency parameter of 1 makes the function secuential
const MAX_CONCURRENT = 5;
export const controlledGetFromApi = makeControlled(getResponse, {
  concurrency: MAX_CONCURRENT,
});

let i = 100;
while (i--)
  // functions will be executed in batches, never more than 3 at a time
  controlledGetFromApi(i)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);

      if (!error.status) {
        console.log(error);
      }
    });
