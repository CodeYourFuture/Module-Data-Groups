function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=",2)
    queryParams[key] = value;
  }

  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"))
console.log(parseQueryString(""))
console.log(parseQueryString("a=1&&b=2"))
module.exports = parseQueryString; 
