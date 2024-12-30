function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); // Handles "=" in the value
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}

module.exports = parseQueryString;
