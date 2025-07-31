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
      // If there is no equal sign, decode the key and assign empty value
      const key = decodeURIComponent(pair);
      queryParams[key] = ""; // ✅ use decoded key
    } else {
      const key = decodeURIComponent(pair.slice(0, firstEqualIndex));
      const value = decodeURIComponent(pair.slice(firstEqualIndex + 1));
      queryParams[key] = value;
    }
  }

  return queryParams;
}
console.log(parseQueryString("equation=x%3Dy%2B1"));
module.exports = parseQueryString;
