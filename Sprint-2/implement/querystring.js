function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split only on the first '=' to handle values containing '='
    const equalsIndex = pair.indexOf("=");
    if (equalsIndex !== -1) {
      const key = pair.substring(0, equalsIndex);
      const value = pair.substring(equalsIndex + 1);
      queryParams[key] = value;
    }
    // If there's no '=', treat the whole string as key with undefined value
  }

  return queryParams;
}

module.exports = parseQueryString;
