function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [keyBeforeDecoding,...rest] = pair.split("=");
    const valueBeforeDecoding=rest.join("=");
    const key=decodeURIComponent(keyBeforeDecoding);
    const value=decodeURIComponent(valueBeforeDecoding);

    queryParams[key] = value;
  }

  return queryParams;
}
console.log(parseQueryString("tags%5B%5D=hello%20world "));

module.exports = parseQueryString;
