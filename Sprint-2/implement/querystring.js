function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) { 
    return queryParams;
  }
    let firstPart = queryString.slice(0, queryString.indexOf("="));
    let secondPart = queryString.slice(queryString.indexOf("=") + 1);
    queryParams[firstPart] = secondPart;

  return queryParams;
}

module.exports = parseQueryString;

console.log(parseQueryString("equation=x=y+1")); // { equation: 'x' }