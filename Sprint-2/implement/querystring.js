function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");
    if (index === -1) {
      queryParams[decodeURIComponent(pair)] = undefined;
    } else {
      const key = decodeURIComponent(pair.slice(0, index));
      const value = decodeURIComponent(pair.slice(index + 1));
      queryParams[key] = value;
    }

    return queryParams;
  }
}

module.exports = parseQueryString;
