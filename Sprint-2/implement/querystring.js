function parseQueryString(queryString) {
  const queryParams = {}; // Initialize an empty object to store the key-value pairs
  if (queryString.length === 0) {// If the input query string is empty, return the empty object
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");// Split the query string into an array of key-value pairs using '&' as the delimiter

  for (const pair of keyValuePairs) {// Iterate through each key-value pair in the array
    const separatorIndex = pair.indexOf("=");// Find the index of the '=' character in the current pair
    const key = separatorIndex === -1 ? pair : pair.slice(0, separatorIndex);// Extract the key from the pair. If there is no '=', the entire pair is the key; otherwise, it's the substring before '='
    const value = separatorIndex === -1 ? "" : pair.slice(separatorIndex + 1);// Extract the value from the pair. If there is no '=', the value is an empty string; otherwise, it's the substring after '='
    queryParams[key] = value;// Add the key and value to the queryParams object
  }

  return queryParams;
}

module.exports = parseQueryString;
