function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.length > 0 ? valueParts.join("=") : undefined;
    queryParams[key] = value;
  }

  return queryParams;
}
// Test:
// console.log(parseQueryString("name=Sajad&age&=35"));
// console.log(parseQueryString("equation=x=y+1"));
// console.log(parseQueryString("name=Sajad&name=Kevin"));
// console.log(parseQueryString("name&age"));

module.exports = parseQueryString;
