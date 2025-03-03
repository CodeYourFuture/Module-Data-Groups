function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const splittedPair = pair.split("=");
    queryParams[splittedPair[0]] = splittedPair.slice(1).join("=");
  }

  return queryParams;
}

module.exports = parseQueryString;
