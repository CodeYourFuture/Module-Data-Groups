function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString;
  let first = "";
  let second = "";
  let many = [];
  for (let pair = 0 ; pair <  keyValuePairs.length ; pair++) {
    if (!many.includes("=")) {
      if (keyValuePairs[pair] == "=") {
        many.push("=");
      } else {
        first += keyValuePairs[pair];
      }
    } else {
      second += keyValuePairs[pair];
    }

  }
  queryParams[first] = second;
  return queryParams;
}
parseQueryString("equation=x=y+1");

module.exports = parseQueryString;
