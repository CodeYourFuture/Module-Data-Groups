function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) return queryParams;

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const index = pair.indexOf("=");

    const key = pair.slice(0, index).trim();
    const value = pair.slice(index + 1).trim();

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
