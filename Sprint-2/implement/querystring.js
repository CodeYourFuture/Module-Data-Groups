function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split only on the first '=' to handle '=' in values
    const [key, ...rest] = pair.split("=");
    queryParams[key] = rest.join("=") || ""; // join rest to reconstruct value
  }

  return queryParams;
}

module.exports = parseQueryString;
