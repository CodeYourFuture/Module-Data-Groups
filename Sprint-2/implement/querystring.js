function parseQueryString(queryString) {
  const queryParams = {};

  // Return an empty object for an empty string
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");

    // Decode the key to handle percent-encoded characters
    const key = decodeURIComponent(indexOfEqual > -1 ? pair.slice(0, indexOfEqual) : pair);

    // Use an empty string "" instead of null for missing or empty values
    const value = indexOfEqual === -1 
      ? "" // No '=' means no value, represented as an empty string
      : decodeURIComponent(pair.slice(indexOfEqual + 1)) || ""; // Empty value case

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;

