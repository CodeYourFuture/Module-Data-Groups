// the bug in the code is that it does not handle cases where the query string has two = signs or more between two parameters.
// in this case we make sure to split the string only at the first = sign.
// so we use the spread operator.
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString === null || queryString === undefined) {
    return "invalid query string";
  }
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...value] = pair.split("=");
    // we convert the value array back to a string and we get back the = signs by using it as separator.
    queryParams[key] = value.join("=");
  }

  return queryParams;
}

module.exports = parseQueryString;
