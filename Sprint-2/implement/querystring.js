function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  console.log(keyValuePairs);

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    console.log([key, value]);
    queryParams[key] = value;
  }

  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));

module.exports = parseQueryString;
