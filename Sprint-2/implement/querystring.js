function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index1 = pair.indexOf("=");
    const key = decodeURIComponent(pair.slice(0, index1));
    const value = decodeURIComponent(pair.slice(index1 + 1));
    queryParams[key] = value;
  }

  return queryParams;
}

console.log(parseQueryString("a%25b=c%26d")); 
module.exports = parseQueryString;
