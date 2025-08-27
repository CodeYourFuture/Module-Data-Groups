function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");

    if (indexOfEqual === -1) {
      // No '=' means key with no value
      queryParams[decodeURIComponent(pair)] = "";
    } else {
      const key = decodeURIComponent(pair.slice(0, indexOfEqual));
      const value = decodeURIComponent(pair.slice(indexOfEqual + 1));
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
