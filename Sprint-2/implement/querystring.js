function parseQueryString(queryString) {
  const params = {};

  if (!queryString) return params;

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const [encodedKey, ...encodedRest] = pair.split("=");
    const encodedValue = encodedRest.join("="); // Handles multiple '=' signs

    // Decode both key and value to handle URL encoding (e.g., 5%25 → 5%)
    const key = decodeURIComponent(encodedKey);
    const value = decodeURIComponent(encodedValue);

    params[key] = value;
  }

  return params;
}

module.exports = parseQueryString;


