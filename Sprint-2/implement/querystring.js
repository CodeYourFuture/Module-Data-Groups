function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valuePart] = pair.split("=");
    const value = valuePart.length > 0 ? valuePart.join("=") : undefined;
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
