function parseQueryString(queryString) {
  //object to store the key value pairs
  const queryParams = {};

  if (queryString.length === 0) {
    //return empty object for empty string
    return queryParams;
  }
  //the info after the ? is needed
  const neededInfo = queryString.split("?");
  //the key value pairs are split on the needed info
  //all the key value info will go to index 1 of the array
  //further split it by the ampersand
  const keyValuePairs = neededInfo[1].split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}

// console.log(parseQueryString("https://example.com/widgets?colour=blue&sort=newest"));
// console.log(parseQueryString(""));
// console.log(parseQueryString("https://example.com/widgets?colour=red"));
module.exports = parseQueryString;
