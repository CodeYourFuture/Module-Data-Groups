function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
    queryParams[key] = valueParts.join("=");
  }

  return queryParams;
}

module.exports = parseQueryString;
