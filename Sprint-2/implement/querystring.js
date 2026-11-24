function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }
    const parts = pair.split("=");

    const key = decodeURIComponent(parts[0].replaceAll("+", " "));
    const value = decodeURIComponent(
      parts.slice(1).join("=").replaceAll("+", " ")
    );
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
