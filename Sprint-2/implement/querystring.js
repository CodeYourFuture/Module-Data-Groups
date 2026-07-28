function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.replaceAll("+", " ").split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") continue;
    const [key = "", value = ""] = pair.split(/=(.*)/);
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}

module.exports = parseQueryString;
