function parseQueryString(queryString) {
  const queryParams = {};

  if (typeof queryString !== "string" || queryString.length === 0) {
    return queryParams;
  }

  const normalizedQueryString = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;

  if (normalizedQueryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = normalizedQueryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.length === 0) {
      continue;
    }

    const separatorIndex = pair.indexOf("=");
    const key = separatorIndex === -1 ? pair : pair.slice(0, separatorIndex);
    const value = separatorIndex === -1 ? "" : pair.slice(separatorIndex + 1);

    if (key.length === 0) {
      continue;
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
