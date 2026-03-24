/**
 * parseQueryString()
 *
 * Parses a query string into an object of decoded key-value pairs.
 *
 * Handles:
 * - empty strings
 * - multiple pairs separated by "&"
 * - values containing "="
 * - missing values
 * - missing "="
 * - trailing "&"
 * - URL-encoded keys and values
 */
function parseQueryString(queryString) {
  const queryParams = Object.create(null);

  // Return an empty object if the input is invalid or empty
  if (typeof queryString !== "string" || queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Skip empty pairs, e.g. from a trailing "&"
    if (pair === "") {
      continue;
    }

    const separatorIndex = pair.indexOf("=");

    let rawKey;
    let rawValue;

    // If there is no "=", treat it as a key with an empty value
    if (separatorIndex === -1) {
      rawKey = pair;
      rawValue = "";
    } else {
      rawKey = pair.slice(0, separatorIndex);
      rawValue = pair.slice(separatorIndex + 1);
    }

    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
