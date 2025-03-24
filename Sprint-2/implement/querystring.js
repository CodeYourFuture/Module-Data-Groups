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
    // const key = pair.slice(0, index); // Extract key
    //const value = pair.slice(index + 1); // Extract everything after "="
    const key = decodeURIComponent(pair.slice(0, index)); // Extract and decode key
    const value = decodeURIComponent(pair.slice(index + 1)); // Extract and decode value
    queryParams[key] = value;
  }
  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));
console.log(parseQueryString("a%25b=c%26d"));

module.exports = parseQueryString;
