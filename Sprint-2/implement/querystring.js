function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");
    let key, value;

    if (indexOfEqual === -1) {
      // No '=' in the pair
      key = pair;
      value = "";
    } else {
      // Split into key and value
      key = pair.slice(0, indexOfEqual);
      value = pair.slice(indexOfEqual + 1);
    }

    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}

module.exports = parseQueryString;


