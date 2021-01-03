// GET PROMISE
// return a promise
export const get = () => {
  return axios.get(`${PRIME_URL}`);
};

// * From index.js file *
// GET Data
get().then((data) => {
  const featuresArray = data.data.features;
  displayFeaturesObj(featuresArray.slice(0, 6));
  console.log(featuresArray);
});

// LOOP THROUGH DATA //
const displayStreets = (data) => {
    for(let result of data) {
      const street = result.properties;
      console.log(street);
    }
  };

const displayFeaturesObj = (data) => {
  if (Array.isArray(data) && data.length > 0) {
    data.forEach((element, index) => {
      console.log(element.properties);
    });
  }
};

/* ================
index.js file

getResponse().then((data) => {
  displayStreets(data);
  console.log("end");
});

const displayStreets = (data) => {
  let result;
  data.forEach((element) => {
    result = element.properties.STREET;
    return result;
  });
};

const displayStreets = (data) => {
  data.forEach((element) => {
    const showStreets = element.properties;
    const result = Object.keys(showStreets).map((item) => {
      console.log(item);
      return item
    });
    console.log(result);
  });
};


*/



