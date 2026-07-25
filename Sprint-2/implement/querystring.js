function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
     continue;
    }
    const everything = pair.split("=");
    const key = decodeURIComponent(everything.shift());
    const value = decodeURIComponent(everything.join("="));
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
