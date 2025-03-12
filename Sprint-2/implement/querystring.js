function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); // Rejoin the value in case it contains '='
    queryParams[key] = decodeURIComponent(value || ""); // Handle undefined values and decode URI components
  }

  return queryParams;
}

module.exports = parseQueryString;
