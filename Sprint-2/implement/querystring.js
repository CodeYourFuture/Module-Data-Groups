function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }
    const parts = pair.split("=");
    const key = parts[0];
    const value = parts.slice(1).join("=")
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
