function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  // Remove leading '?' if present
  if (queryString.startsWith("?")) {
    queryString = queryString.substring(1);
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Only split on the first '=' to handle values containing '='
    const equalsIndex = pair.indexOf("=");
    if (equalsIndex === -1) {
      // Handle keys without values
      const key = decodeURIComponent(pair);
      queryParams[key] = "";
    } else {
      const key = decodeURIComponent(pair.substring(0, equalsIndex));
      const value = decodeURIComponent(pair.substring(equalsIndex + 1));
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
