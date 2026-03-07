function parseQueryString(queryString) {
  const queryParams = {};

  // Handle empty string or just "?"
  if (!queryString || queryString === "?") {
    return queryParams;
  }

  // Remove leading ? if present
  const cleaned = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;
  const keyValuePairs = cleaned.split("&").filter(Boolean);

  for (const pair of keyValuePairs) {
    // Only split on the first =
    const equalIndex = pair.indexOf("=");

    if (equalIndex === -1) {
      // key without = → value is empty string
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, equalIndex);
      const value = pair.slice(equalIndex + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
