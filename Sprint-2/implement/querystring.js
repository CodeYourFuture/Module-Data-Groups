function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...value] = pair.split("=");
    const strvalue = value.join("=");
    queryParams[key] = strvalue;
  }

  return queryParams;
}

module.exports = parseQueryString;
