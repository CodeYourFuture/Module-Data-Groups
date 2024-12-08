function parseQueryString(queryString) {
  // assume queryString has a value of "sort=lowest&colour=yellow"
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // keyValuePairs will point to ["sort=lowest", "colour=yellow"]

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
module.exports = parseQueryString;