function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const cutOff = pair.indexOf("=");
    const key = pair.slice(0, cutOff);
    const value = pair.slice(cutOff + 1, pair.length);
    queryParams[key] = value;
    console.log(key);
    console.log(value);
  }

  return queryParams;
}
console.log(parseQueryString("y=8&r=y"));
console.log(parseQueryString("equation=x=y+1"));
console.log(parseQueryString("="));

module.exports = parseQueryString;
