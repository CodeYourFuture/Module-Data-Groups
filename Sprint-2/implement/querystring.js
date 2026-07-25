function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  // Replaces + with space
  queryString = queryString.replaceAll("+", " ");
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair !== "") {
      let index = pair.indexOf("=");
      if (!pair.includes("=")) {
        index = pair.length;
      }
      const rawKey = pair.slice(0, index);
      const rawValue = pair.slice(index + 1);

      // Remove percentage-encoded characters
      const key = decodeURIComponent(rawKey);
      const value = decodeURIComponent(rawValue);

      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
