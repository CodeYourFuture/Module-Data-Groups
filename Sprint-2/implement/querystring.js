function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("="); 
    const value = valueParts.join("="); 
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}

console.log(parseQueryString("equation=x=y+1"));

module.exports = parseQueryString;
