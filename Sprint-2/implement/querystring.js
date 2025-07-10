function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&"); // if multiple pairs exist split at the

  for (const keyValuePair of keyValuePairs) {
    const index = keyValuePair.indexOf("="); // Finding the first occurrence of '='
    if (index !== -1) {
      const rawKey = keyValuePair.substring(0, index);
      const rawValue = keyValuePair.substring(index + 1);
      const key = decodeURIComponent(rawKey);
      const value = decodeURIComponent(rawValue);
      queryParams[key] = value;
    } else {
      const key = decodeURIComponent(keyValuePair);
      queryParams[key] = "";
    }
  }
  return queryParams;
}
module.exports = parseQueryString;
