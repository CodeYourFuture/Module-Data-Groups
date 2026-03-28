// Parse a query string into an object of key-value pairs
function parseQueryString(queryString) {
  // Create an empty object to store the results
  const queryParams = {};

  // If the input is empty, return the empty object
  if (queryString.length === 0) {
    return queryParams;
  }

  // Split the string by "&" to get each key=value pair
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Skip empty pairs caused by double ampersands like "key1=value1&&key2=value2"
    if (pair === "") {
      continue;
    }

    // Find the position of the FIRST "=" only
    const firstEqualIndex = pair.indexOf("=");

    // If there is no "=", the whole pair is the key with an empty value
    if (firstEqualIndex === -1) {
      queryParams[pair] = "";
    } else {
      // Everything before the first "=" is the key
      const key = pair.slice(0, firstEqualIndex);
      // Everything after the first "=" is the value (may contain more "=" signs)
      const value = pair.slice(firstEqualIndex + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
