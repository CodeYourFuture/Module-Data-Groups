// function parseQueryString(queryString) {
//   const queryParams = {};
//   if (queryString.length === 0) {
//     return queryParams;
//   }
//   const keyValuePairs = queryString.split("&");

//   for (const pair of keyValuePairs) {
//     const [key, value] = pair.split("=");
//     queryParams[key] = value;
//   }

//   return queryParams;
// }

const parseQueryString = (input) => {
  const queryParamsReturned = {};
  if (input.length === 0) {
    return queryParamsReturned;
  }

  const keyValuePairs = input.split("&");
  // const keyValuePairs = queryString.split("=");
  // const key = keyValuePairs[0];
  // const value = keyValuePairs[1];
  keyValuePairs.forEach((pair) => {
    //split into key and the secondPart

    const [key, ...secondPart] = pair.split("=");
    // if additional '=' connect for the value

    //% handling
    const correctKey = decodeURIComponent(key);
    const correctValue = decodeURIComponent(secondPart.join("="));
    queryParamsReturned[correctKey] = correctValue;

    // so instead I split into 2 parts always
    // const [key, value] = pair.split("=", 2);
    // queryParamsReturned[key] = value;
  });

  return queryParamsReturned;
};

module.exports = parseQueryString;
