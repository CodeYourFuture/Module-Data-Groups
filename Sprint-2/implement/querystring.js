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
    if (!(key in queryParams)) {
      queryParams[key] = value;
    } else if (Array.isArray(queryParams[key])) {
      queryParams[key].push(value);
    } else {
      queryParams[key] = [queryParams[key], value];
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
