function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    queryParams[key] = rest.join("=");
  }

  return queryParams;
}

console.log(parseQueryString("equation=x=y+1"));
module.exports = parseQueryString;
