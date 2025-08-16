function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);
    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}
console.log(parseQueryString("color=blue&sort=newest"));
console.log(parseQueryString("a%25b=c%26d"));

module.exports = parseQueryString;
