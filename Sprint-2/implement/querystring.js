function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const equalSignIndex = pair.indexOf("=");
    if (equalSignIndex === -1) {
      queryParams[pair] = null;
    } else {
      const key = pair.slice(0, equalSignIndex);
      const value = pair.slice(equalSignIndex + 1);
      queryParams[key] = decodeURIComponent(value);
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
