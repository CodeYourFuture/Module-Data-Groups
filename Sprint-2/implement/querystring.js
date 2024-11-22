function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
const value = valueParts.join("=");
queryParams[key] = value;

  }

  return queryParams;
}
console.log(parseQueryString("key1=value1&key2=value2"))
module.exports = parseQueryString;
