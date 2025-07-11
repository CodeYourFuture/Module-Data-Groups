function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    //const [key, value] = pair.split("=", 2);
     const [key, value] = [pair.slice(0,pair.indexOf('=')),pair.slice(pair.indexOf('=')+1)];
     queryParams[key] = value;
  }
  return queryParams;
}
console.log(parseQueryString("a=1&b=2"))
module.exports = parseQueryString;
