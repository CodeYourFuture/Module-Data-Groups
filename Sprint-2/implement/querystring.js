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
    const key = decodeURIComponent(everything.shift().replace(/\+/g, " "));
    const value = decodeURIComponent(everything.join("=").replace(/\+/g, " "));
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
