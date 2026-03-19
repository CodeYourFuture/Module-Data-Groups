function parseQueryString(queryString) {
  if (typeof queryString !== "string") throw new Error("Invalid Input");
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    let [key, value] = pair.split(/=(.*)/);
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
