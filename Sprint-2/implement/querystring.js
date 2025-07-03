function parseQueryString(queryString) {
  const queryParams = {}; // initialize empty object to store key and value pairs
  if (queryString.length === 0) {
    return queryParams; // return empty object if the input string is empty
  }
  const keyValuePairs = queryString.split("&"); // split string by "&" to separate each key and value pair

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("="); // find the first appearance "=" in the string

    if (index === -1) {
      const key = decodeURIComponent(pair);
      queryParams[key] = "";
    } else {
      const key = decodeURIComponent(pair.slice(0, index));

      const value = decodeURIComponent(pair.slice(index + 1));

      queryParams[key] = value; // add the decoded key and value to the object
    }
  }
  return queryParams; // return the completed object with all key and value pairs.
}

module.exports = parseQueryString;
