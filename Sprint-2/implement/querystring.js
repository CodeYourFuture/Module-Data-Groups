function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams; // Return empty object for empty query string
  }

  // Split the query string into key-value pairs using "&"
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split only at the first "=" to separate key and value
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); // Join the remaining parts of the value (after the first "=")

    // Store the key-value pair in the object
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}

module.exports = parseQueryString;
