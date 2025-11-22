function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const parts = pair.split("=");
    const decode = (s) => decodeURIComponent(s.replace(/\+/g, "%20"));
    const rawKey = parts[0];
    const key = decode(rawKey);

    if (parts.length === 1) {
      // No '=' present → undefined value
      queryParams[key] = undefined;
    } else {
      // Rejoin remaining pieces (handles '=' inside value), then decode
      const rawValue = parts.slice(1).join("=");
      queryParams[key] = decode(rawValue);
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
