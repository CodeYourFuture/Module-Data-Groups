function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&"); // if multiple pairs exist split at the

  for (const keyValuePair of keyValuePairs) {
    const index = keyValuePair.indexOf("="); // Finding the first occurrence of '='
    if (index !== -1) {
      const key = keyValuePair.substring(0, index);
      const value = keyValuePair.substring(index + 1);
      queryParams[key] = value;
    }
  }
  return queryParams;
}
module.exports = parseQueryString;
