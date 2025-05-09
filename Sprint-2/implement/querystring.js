function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    const [key, ...values] = pair.split("=");
    const decodedKey = decodeURIComponent(key || "");
    const decodedValue = decodeURIComponent(values.join("="));

    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}

module.exports = parseQueryString;
