function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;
    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value || "");
  }

  return queryParams;
}

module.exports = parseQueryString;
