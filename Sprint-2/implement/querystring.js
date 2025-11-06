function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEquals = pair.indexOf("=");

    if (indexOfEquals === -1) {
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, indexOfEquals);
      const value = pair.slice(indexOfEquals + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));
module.exports = parseQueryString;
