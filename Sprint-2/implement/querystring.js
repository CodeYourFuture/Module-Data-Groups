function parseQueryString(queryString) {
  const queryParams = {};
  if (
    typeof queryString !== "string" ||
    queryString.startsWith("=") ||
    queryString.endsWith("=") ||
    queryString.trim().length === 0
  ) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfFirstEqual = pair.indexOf("=");
    const key = pair.slice(0, indexOfFirstEqual);
    const value = pair.slice(indexOfFirstEqual + 1);
    queryParams[key] = value;
  }
  return queryParams;
}

parseQueryString([89, 88]);

module.exports = parseQueryString;
