function parseQueryString(queryString) {
  const queryParams = {};
  // declare an empty object to use it later.
  if (queryString.length === 0) {
    return queryParams;
  }
  // check if input isn't an empty string.
  const keyValuePairs = queryString.split("&");
  // split the string to an array

  for (const pair of keyValuePairs) {
    const parts = pair.split("=");
    // loop through the array and split to arrays
    const key = decodeURIComponent(parts[0]);
    // decode from the url value to object key
    const value = decodeURIComponent(parts.slice(1).join("=") || "");
    // decode from the url value to object value ensure that '=' or '' can be part of the string
    if (key) { 
      queryParams[key] = value;
      // add key and value to the object.
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
