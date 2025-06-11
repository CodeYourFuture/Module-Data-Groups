function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    let [key, ...value] = pair.split("=");
    if (value.length > 1) {
      value = value.join("=");
    }
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
