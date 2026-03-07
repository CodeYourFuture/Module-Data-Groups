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

  // Split into segments and ignore empty ones
  const segments = cleaned.split("&").filter(Boolean);

  for (const segment of segments) {
    // Split only on the first =, but everything after is a value
    const eqIndex = segment.indexOf("=");

    const key = eqIndex === -1 ? segment : segment.slice(0, eqIndex);
    const value = eqIndex === -1 ? "" : segment.slice(eqIndex + 1);

    if (key) {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
