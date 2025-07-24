
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (let i = 0; i < keyValuePairs.length; i++) {
    const pair = keyValuePairs[i];
    const firstEqualIndex = pair.indexOf("=");

    if (firstEqualIndex === -1) {
      // If there is no equal sign, treat the whole pair as a key with an empty value
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, firstEqualIndex);
      const value = pair.slice(firstEqualIndex + 1);
      queryParams[key] = value;
      }
  }

  return queryParams;
}
console.log(parseQueryString("equation=x=y+1")); // { equation: 'x=y+1' }
module.exports = parseQueryString;