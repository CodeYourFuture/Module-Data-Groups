function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split(",");

  for (const pair of keyValuePairs) {
    const [rawKey, ...rawValueParts] = pair.split("=");
    const key = decodeURIComponent(rawKey || "");
    const value = decodeURIComponent(rawValueParts.join("=") || "");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
