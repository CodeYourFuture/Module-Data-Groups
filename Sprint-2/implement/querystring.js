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
    if (pair === "") continue;

    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("=");

    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}

module.exports = parseQueryString;