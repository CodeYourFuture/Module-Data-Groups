// Parses a query string into an object, decoding percent-encoded characters in keys and values
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEquals = pair.indexOf("=");

    if (indexOfEquals === -1) {
      const decodedKey = decodeURIComponent(pair);
      queryParams[decodedKey] = "";
      continue;
    }

    const key = pair.slice(0, indexOfEquals);
    const value = pair.slice(indexOfEquals + 1);

    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);

    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}

module.exports = parseQueryString;

