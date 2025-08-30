function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (let pair = 0; pair < keyValuePairs.length; pair++) {
    const index = keyValuePairs[pair].indexOf("="); 
    if (index === -1) {
      queryParams[keyValuePairs[pair]] = "";
    } else {
      const key = keyValuePairs[pair].slice(0, index);
      const value = keyValuePairs[pair].slice(index + 1);
      queryParams[key] = value;
    }
  }
  return queryParams;
}
parseQueryString("equation=x=y+1");

module.exports = parseQueryString;
