function parseQueryString(queryString) {
  const queryParams = {};
  if (typeof queryString!=="string"||queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
     const equalIndex = pair.indexOf("=");

     const key = pair.slice(0, equalIndex);
     const value = pair.slice(equalIndex + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

console.log(parseQueryString("color=blue&quality=good"))
console.log(parseQueryString("equation=x=y+1"))
console.log(parseQueryString(""))

module.exports = parseQueryString;
