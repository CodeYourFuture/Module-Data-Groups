function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const equalityPosition = pair.indexOf("=");
    if (equalityPosition == -1) {
      continue;
    }
    const key = pair.slice(0, equalityPosition);
    const value = pair.slice(equalityPosition + 1);
    queryParams[key] = value;
  }

  return queryParams;
}
//console.log(parseQueryString(["amir = male"]));
module.exports = parseQueryString;
