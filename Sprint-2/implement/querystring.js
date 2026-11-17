function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const splitIndex = pair.indexOf("=");
    const key = pair.substring(0, splitIndex);
    const value = pair.substring(splitIndex + 1,);
    queryParams[key] = value;
  }

  return queryParams;
}

parseQueryString("equation=a=b-2");

module.exports = parseQueryString;
