function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  // split the query string into array of key-value pairs

  for (const pair of keyValuePairs) {

    const indexOfEqual = pair.indexOf("=");
    // find the first "="

    if (indexOfEqual === -1) {
      // handling key with no value
      const key = decodeURIComponent(pair.trim());
      queryParams[key] = null;
    } else {
      const key = decodeURIComponent(pair.slice(0, indexOfEqual));
      const value = decodeURIComponent(pair.slice(indexOfEqual + 1));
      queryParams[key] = value;
      // storing the key+value in the obj
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
