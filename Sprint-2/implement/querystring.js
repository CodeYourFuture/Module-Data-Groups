function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...values] = pair.split("=");
    if (key === "") {
      continue;
    }
    const value = values.join("=");
    queryParams[key] = value;
  }

  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));

console.log(parseQueryString("=value"));

module.exports = parseQueryString;
