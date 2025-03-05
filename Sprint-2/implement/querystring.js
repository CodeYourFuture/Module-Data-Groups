function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.trim().length === 0) {//trim spaces and check for an empty space
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...value] = pair.split("=");// keep elements after first '=
    queryParams[key] = value.join("=");//rejoin multiple '=' in value
  }

  return queryParams;
}

module.exports = parseQueryString;
