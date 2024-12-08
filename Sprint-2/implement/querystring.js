function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Find the first '=' to split between key and value
    const separatorIndex = pair.indexOf("=");

    if (separatorIndex === -1) {
      // If there's no '=', treat it as a key with an empty value
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, separatorIndex);
      const value = pair.slice(separatorIndex + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
