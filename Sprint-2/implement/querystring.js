function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    if (!pair) continue;

    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");

    if (!key) continue;

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
