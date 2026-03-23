function parseQueryString(queryString) {
  if (queryString.startsWith("?")) {
    queryString = queryString.substring(1);
  }

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
