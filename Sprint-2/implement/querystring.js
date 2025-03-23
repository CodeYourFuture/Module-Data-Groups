function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // const [key, value] = pair.split("=");
    // queryParams[key] = value;
    const index = pair.indexOf("="); // Find the first "="
    const key = pair.slice(0, index); // Extract key
    const value = pair.slice(index + 1); // Extract everything after "="
    queryParams[key] = value;
  }
  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));

module.exports = parseQueryString;
