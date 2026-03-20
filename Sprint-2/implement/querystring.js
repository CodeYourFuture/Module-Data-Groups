function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    const value = rest.join("="); // this join back the remaining parts
    queryParams[key] = value;
  }

  return queryParams;
}
h;
module.exports = parseQueryString;
