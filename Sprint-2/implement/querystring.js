function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue; // skip empty entries (e.g. trailing &)
    const [key, ...rest] = pair.split("=");
    const value = rest.length > 0 ? rest.join("=") : null;

    // Decode URI components
    const decodedKey = decodeURIComponent(key);
    const decodedValue = value === null ? null : decodeURIComponent(value);

    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}

module.exports = parseQueryString;
