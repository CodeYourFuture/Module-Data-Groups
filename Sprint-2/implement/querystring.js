function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfFirst = pair.indexOf("=");
    if (indexOfFirst === -1) {
      queryParams[pair] = "";
    } else {
      let key = decodeURIComponent(
        pair.slice(0, indexOfFirst).replaceAll("+", " ")
      );
      let value = decodeURIComponent(
        pair.slice(indexOfFirst + 1).replaceAll("+", " ")
      );
      queryParams[key] = value;
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
