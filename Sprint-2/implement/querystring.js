function parseQueryString(queryString) {
  const queryParams = {};

  // Return an empty object for an empty string
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split only at the first '=' to handle values with '='
    const indexOfEqual = pair.indexOf("=");
    const key = indexOfEqual > -1 ? pair.slice(0, indexOfEqual) : pair;
    const value =
      indexOfEqual === -1
        ? null // No '=' means value is null
        : decodeURIComponent(pair.slice(indexOfEqual + 1)); // Decode the value
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
