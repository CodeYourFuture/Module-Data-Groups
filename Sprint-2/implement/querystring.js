function parseQueryString(queryString) {
  const queryParams = {};

  if (typeof queryString !== "string") {
    throw new Error("Your input is not valid");
  }

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    //get the indexof the first occurrence of "="
    const index = pair.indexOf("=");
    //slice the first part and store in a variable
    const slicedFirstPart = pair.slice(0, index)
    //get the second part and store in a variable
    const slicedSecondPart = pair.slice(index + 1);

    const decodeKey = decodeURIComponent(slicedFirstPart)
    const decodeValue = decodeURIComponent(slicedSecondPart);

    //then add it to the queryParams object
    queryParams[decodeKey] = decodeValue;

  }

  return queryParams;
}

module.exports = parseQueryString;

