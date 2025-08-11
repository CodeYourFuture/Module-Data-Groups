function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const parts = pair.split("=");
    const key = decodeURIComponent(parts[0]);
    const value =
      parts.length > 1 ? decodeURIComponent(parts.slice(1).join("=")) : "";

    if (queryParams[key]) {
      if (!Array.isArray(queryParams[key])) {
        queryParams[key] = [queryParams[key]];
      }
      queryParams[key].push(value);
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
