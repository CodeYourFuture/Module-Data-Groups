function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const eqIndex = queryString.indexOf("=");

  let firstPart = decodeURIComponent(queryString.slice(0, eqIndex));
  let secondPart = decodeURIComponent(queryString.slice(eqIndex + 1));

  queryParams[firstPart] = secondPart;

  return queryParams;
}

module.exports = parseQueryString;

//console.log(parseQueryString("equation=x=y+1"));