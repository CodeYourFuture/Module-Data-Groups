function parseQueryString(queryString) {
  const queryParams = {};

  // Return an empty object for an empty string
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");
    const key = indexOfEqual > -1 ? pair.slice(0, indexOfEqual) : pair;
    const value = indexOfEqual === -1 
      ? null // If there's no '=', treat the value as null
      : decodeURIComponent(pair.slice(indexOfEqual + 1)) || null; // Handle empty value case

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
