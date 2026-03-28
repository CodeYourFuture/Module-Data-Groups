function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split the pair on the first "=" to separate the key and value
    const [key, ...value] = pair.split("=");
    queryParams[key] = value.join("=");
  }

  return queryParams;
}

module.exports = parseQueryString;
