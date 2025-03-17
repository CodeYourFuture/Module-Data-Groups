function parseQueryString(queryString) {
  const queryParams = {};

  // If the query string is empty, return an empty object
  if (queryString.length === 0) {
    return queryParams;
  }

  // Split the query string into key-value pairs based on "&"
  const keyValuePairs = queryString.split("&");

  // Loop through each key-value pair
  for (const pair of keyValuePairs) {
    // Split only at the first "=" to separate key and value, keeping the rest of the value intact
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); // Join the rest of the parts together to preserve the value

    // Assign the key-value pair to the queryParams object
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
