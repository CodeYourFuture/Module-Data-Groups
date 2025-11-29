function parseQueryString(queryString) {
  const queryParams = {};
  if (typeof queryString !== "string" || !queryString) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
      continue;
    }
    const index = pair.indexOf("=");
    if (index === -1) {
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, index);
      const value = pair.slice(index + 1);
      queryParams[key] = value;
    }
  }
  return queryParams;
}
console.log(parseQueryString("equation=x=y+1&sound=none"));

module.exports = parseQueryString;
