function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split(/=(.*)/);
    queryParams[key] = value;
  }

  return queryParams;
}
parseQueryString("equation=x=y+1")

// Object {
//   -   "equation": "x=y+1", - ожидаем
//   +   "equation": "x", - то что мы получили

//"equation=x=y+1" - передали
// equation": "x=y+1 - ожидаем получить

module.exports = parseQueryString;
