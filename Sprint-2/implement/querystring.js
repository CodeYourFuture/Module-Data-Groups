function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const decodedPair = decodeURIComponent(pair);
    const [key, value] = decodedPair.split(/=(.*)/s);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
