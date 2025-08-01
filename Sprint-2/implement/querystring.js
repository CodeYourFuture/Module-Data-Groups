function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(rest.join("="));
    queryParams[decodedKey] = decodedValue;

   
  }

  return queryParams;
}

module.exports = parseQueryString;
