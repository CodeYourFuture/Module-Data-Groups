function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || queryString.length === 0) {
    return queryParams; // Return empty object for empty query string
  }
  const keyValuePairs = queryString.split("&"); // Split by '&' to get individual key-value pairs

  for (const pair of keyValuePairs) {
    // Iterate over each key-value pair
    if (!pair.includes("=")) {
      // Handle missing equals sign
      queryParams[pair] = undefined; // Assign undefined for keys without equals sign
      continue; // Move to the next pair
    }
    const [key, ...rest] = pair.split("="); // array destructured into key and rest of array.
    // Split by '=' to separate key and value.
    const value = rest.join("="); // Join back any '=' in the value using rest operator
    queryParams[key] = value; // Assign key-value pair to the result object
  }

  return queryParams;
}

module.exports = parseQueryString;
