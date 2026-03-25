function parseQueryString(queryString) {
  // create an empty object to store results
  const queryParams = {};
  // if the string is empty, return the empty object
  if (queryString.length === 0) {
    return queryParams;
  }
  // split the string into parts at each "&"
  const keyValuePairs = queryString.split("&");
  // loop through each part

  for (const pair of keyValuePairs) {
    // Find the first "=" sign
    const index = pair.indexOf("=");
    // throw error if "=" is missing
  if (index === -1) {
    throw new Error("Invalid query string: missing '='");
  }// Everything before "=" is the key 
    const key = decodeURIComponent(pair.slice(0, index));
    // Everything after "=" is the value
    const value = decodeURIComponent(pair.slice(index + 1));
    // Put key and value into the object
    queryParams[key] = value;
  }
  // return the object with results.
  return queryParams;
}
module.exports = parseQueryString;
