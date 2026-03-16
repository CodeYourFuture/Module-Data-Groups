function parseQueryString(queryString) {
  // const type = typeof queryString;
  // if (type !== "string") {
  //   return "invalid input";
  // }
  const queryParams = {};
  if (queryString.length === 0 || queryString.match(/[^=]\w*/)) {
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
console.log(parseQueryString("3=89"));
console.log(parseQueryString("5"));
console.log(parseQueryString("equation=x=y+1"));

module.exports = parseQueryString;
