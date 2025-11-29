function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key,...rest] = pair.split("=");
    const value=rest.join("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
