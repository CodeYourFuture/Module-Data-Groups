function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const item of keyValuePairs) {
    const pair = item.split("=");
    const key = pair.shift();
    const value = pair.join("=");
    if (!key) continue;
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
