function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");
    if (indexOfEqual === -1) {
      // If there's no '=' sign, treat the entire pair as a key with undefined value
      queryParams[pair] = undefined;
    } else {
      // Otherwise, split into key and value
      const key = pair.slice(0, indexOfEqual);
      const value = pair.slice(indexOfEqual + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;

