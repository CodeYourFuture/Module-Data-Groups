function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
    if (key) {
      const decodedKey = decodeURIComponent(key);
      const decodedValue =
        valueParts.length > 0 ? decodeURIComponent(valueParts.join("=")) : null;
      queryParams[decodedKey] = decodedValue;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
