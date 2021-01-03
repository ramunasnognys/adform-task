// const { makeControlled } = require("concurrency-control");


// // a concurrency parameter of 1 makes the function secuential
// const MAX_CONCURRENT = 3;
// const controlledGetFromApi = makeControlled(getResponse, {
//   concurrency: MAX_CONCURRENT,
// });

// let i = 40;
// while (i--)
//   // functions will be executed in batches, never more than 3 at a time
//   controlledGetFromApi(i)
//     .then((result) => {
//       console.log("Vuallla, Success!!!");
//     })
//     .catch((error) => {
//       console.log(error);

//       if (!error.status) {
//         console.log(error);
//       }
//     });
