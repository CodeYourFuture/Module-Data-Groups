function parseQueryString(queryString) {
  const queryParams = {};

  // If the query string is empty return empty object
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {

    const index = pair.indexOf("=");

    // If no "=" exists treat the value as empty
    if (index === -1) {
      queryParams[pair] = "";
      continue;
    }

    const key = pair.slice(0, index);
    const value = pair.slice(index + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;