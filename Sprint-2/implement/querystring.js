function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const key = pair.split("=")[0];
    const value = pair.split("=").slice(1).join("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
