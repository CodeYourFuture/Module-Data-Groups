function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const parts = pair.split("=");
    const key = parts[0];
    
    if (parts.length === 1) {
      // No = found, set value to undefined
      queryParams[key] = undefined;
    } else {
      // Join everything after the first = back together
      const value = parts.slice(1).join("=");
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
