function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");
    if (indexOfEqual === -1) {
      queryParams[pair] = null; // Handle keys with no value
    } else {
      const key = pair.slice(0, indexOfEqual);
      const value = pair.slice(indexOfEqual + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
