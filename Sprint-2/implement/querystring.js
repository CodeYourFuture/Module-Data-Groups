function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.length === 0) {
      continue;
    }

    if (!pair.includes("=")) {
      const key = decodeURIComponent(
        pair.slice(0, pair.indexOf("="))
      ).replaceAll("+", " ");

      queryParams[pair] = "";

      continue;
    }

    const equalIndex = pair.indexOf("=");

    const rawKey = pair.slice(0, equalIndex);
    const rawValue = pair.slice(equalIndex + 1);

    const key = decodeURIComponent(rawKey).replaceAll("+", " ");
    const value = decodeURIComponent(rawValue).replaceAll("+", " ");

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
