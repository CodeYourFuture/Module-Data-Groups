function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");
    if (index === -1) {
      queryParams[pair] = "";
    } else {
      const key = pair.substring(0, index);
      const value = pair.substring(index + 1);
      queryParams[key] = value;
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
