function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");
    // Decode key and value to handle special characters
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);
    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}

module.exports = parseQueryString;
