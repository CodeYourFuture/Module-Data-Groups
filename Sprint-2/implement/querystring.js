function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // split only the first "=" to handle cases where the value contains "="
    const [key, ...rest] = pair.split("=");

    // rejoin the rest incase there are "=" in the value
    const value = rest.join("=");

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
