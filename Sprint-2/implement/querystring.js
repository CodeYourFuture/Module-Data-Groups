function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    const value = rest.join("="); // Join the rest in case the value contains '='
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  
  }
    return queryParams;
}

module.exports = parseQueryString;
