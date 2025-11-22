function parseQueryString(queryString) {
  const queryParams = {};

  // Return empty object if input is empty
  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split only on the first '='
    const index = pair.indexOf("=");
    if (index === -1) {
      // No '=' in this pair, treat as key with empty string value
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, index);
      const value = pair.slice(index + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
