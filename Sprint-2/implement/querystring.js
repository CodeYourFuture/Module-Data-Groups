function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [decodedKey, ...decodedValueParts] = pair.split("=");
    const key = decodeURIComponent(decodedKey);
    const value = decodeURIComponent(decodedValueParts.join("=") || "");

    queryParams[key] = value;
  }
  return queryParams;
}
module.exports = parseQueryString;
