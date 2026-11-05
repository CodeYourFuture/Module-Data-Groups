function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") continue;

    const index = pair.indexOf("=");
    const separator = index !== -1;
    const key = separator ? pair.slice(0, index) : pair;
    const value = separator ? pair.slice(index + 1) : "";
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
