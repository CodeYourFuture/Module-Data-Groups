function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    if (!pair) continue;

    const [key, ...valuePart] = pair.split("=");
    const value = valuePart.join("=");

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
