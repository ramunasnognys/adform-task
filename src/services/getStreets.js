import { getResponse } from "./getAPIResponse.js";

const streetsContainer = document.getElementById("api-container");
let streets;

export const getStreets = async () => {
  try {
    getResponse().then((res) => {
      streets = res.map((item) => item.properties);
      const duplicateStreetsArray = streets.map((item) => item.STREET);

      const uniqStreetsArray = [...new Set(duplicateStreetsArray)];

      uniqStreetsArray.forEach((str, i) => {
        if (str !== null && str !== "") {
          const itemsDiv = document.createElement("div");
          streetsContainer.appendChild(itemsDiv);

          const itemId = document.createElement("span");
          itemsDiv.appendChild(itemId);
          itemId.innerText = i + 1;
          itemId.style.paddingRight = "5px";

          const itemStreet = document.createElement("span");
          itemsDiv.appendChild(itemStreet);
          itemStreet.innerText = str.toLowerCase().capitalize();
        }
      });

      console.log(` THE LENGTH OF UNIQ values: ${uniqStreetsArray.length}`);
      console.log(
        ` THE LENGTH OF DUPLICATE values: ${duplicateStreetsArray.length}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
