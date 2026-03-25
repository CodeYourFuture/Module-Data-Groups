function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const equalsIndex = pair.indexOf("=");

    if (equalsIndex === -1) {
      queryParams[pair] = "";
      continue;
    }
    const key = pair.slice(0, equalsIndex);
    const value = pair.slice(equalsIndex + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
