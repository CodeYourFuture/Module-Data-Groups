function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const firstEqualSign = pair.indexOf("=");

    if (firstEqualSign === -1) {
      queryParams[decodeURIComponent(pair)] = null;
    } else {
      const key = decodeURIComponent(pair.substring(0, firstEqualSign));
      const value = decodeURIComponent(pair.substring(firstEqualSign + 1));
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
