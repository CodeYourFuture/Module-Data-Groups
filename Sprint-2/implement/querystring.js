function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    if (!pair) continue;

    const [key, ...valuePart] = pair.split("=");
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(valuePart.join("="));

    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}
console.log(parseQueryString("a%25b=c%26d"));

module.exports = parseQueryString;
