function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
     const equalsIndex = pair.indexOf('=');
     const keyPair = pair.slice(0,equalsIndex);
     const valuePair = pair.slice(equalsIndex+1); // plus 1 to omit the '='
     const [key, value] = [keyPair,valuePair];
     queryParams[key] = value;
  }
  return queryParams;
}
console.log(parseQueryString("a=&b=hello"))
module.exports = parseQueryString;
